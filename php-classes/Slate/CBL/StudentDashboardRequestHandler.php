<?php

namespace Slate\CBL;

use DB, TableNotFoundException;
use Emergence\People\PeopleRequestHandler;
use Slate\People\Student;

class StudentDashboardRequestHandler extends \RequestHandler
{
    public static $userResponseModes = [
        'application/json' => 'json',
        'text/csv' => 'csv'
    ];

    public static function handleRequest()
    {
        $GLOBALS['Session']->requireAccountLevel('Student');

        switch ($action = static::shiftPath()) {
            case 'recent-progress':
                return static::handleRecentProgressRequest();
            case 'completions':
                return static::handleCompletionsRequest();
            case 'demonstration-skills':
                return static::handleDemonstrationSkillsRequest();
            case '':
            case false:
                return static::handleDashboardRequest();
            default:
                return static::throwNotFoundError();
        }
    }

    public static function handleDashboardRequest()
    {
        return static::respond('student-dashboard', [
            'Student' => static::_getRequestedStudent(),
            'ContentArea' => static::_getRequestedContentArea()
        ]);
    }

    public static function handleRecentProgressRequest() {
        $Student = static::_getRequestedStudent();
        $ContentArea = static::_getRequestedContentArea();

        if (!$ContentArea) {
            return static::throwInvalidRequestError('Content area required');
        }

        $limit = isset($_GET['limit']) ? $_GET['limit'] : 10;

        try {
            // TODO: do name formatting on the client-side
            $progress = DB::allRecords('
                SELECT ds.DemonstratedLevel AS demonstratedLevel,
                       d.Created AS demonstrationCreated,
                       CONCAT(CASE p.Gender
                         WHEN "Male"   THEN "Mr. "
                         WHEN "Female" THEN "Ms. "
                          END, p.lastName) AS teacherTitle,
                       c.Descriptor AS competencyDescriptor,
                       s.Descriptor AS skillDescriptor
                  FROM %s AS ds
                  JOIN %s AS p
                    ON ds.CreatorID = p.ID
                  JOIN %s AS d
                    ON d.ID = ds.DemonstrationID
                  JOIN %s AS s
                    ON s.ID = ds.SkillID
                  JOIN %s AS c
                    ON c.ID = s.CompetencyID
                  WHERE d.StudentID = %s
                    AND c.ContentAreaID = %s
                  ORDER BY d.Created DESC
                  LIMIT %d',
                [
                    Demonstrations\DemonstrationSkill::$tableName,
                    \Emergence\People\Person::$tableName,
                    Demonstrations\Demonstration::$tableName,
                    Skill::$tableName,
                    Competency::$tableName,
                    $Student->ID,
                    $ContentArea->ID,
                    $limit
                ]
            );
        } catch (TableNotFoundException $e) {
            $progress = [];
        }

        // cast strings to integers
        foreach ($progress AS &$progressRecord) {
            $progressRecord['demonstratedLevel'] = intval($progressRecord['demonstratedLevel']);
            $progressRecord['demonstrationCreated'] = strtotime($progressRecord['demonstrationCreated']);
        }
        
        return static::respond('progress', [
            'data' => $progress
        ]);
    }

    public static function handleCompletionsRequest()
    {
        $Student = static::_getRequestedStudent();

        if (empty($_GET['competencies']) || !($competencies = Competency::getAllByListIdentifier($_GET['competencies']))) {
            return static::throwNotFoundError('Competencies list required');
        }

        $completions = [];

        foreach ($competencies AS $Competency) {
            $completions[] = array_merge([
                'StudentID' => $Student->ID,
                'CompetencyID' => $Competency->ID
            ], $Competency->getCompletionForStudent($Student));
        }

        return static::respond('completions', [
            'data' => $completions
        ]);
    }

    public static function handleDemonstrationSkillsRequest()
    {
        $Student = static::_getRequestedStudent();

        if (empty($_GET['competencies']) || !($competencies = Competency::getAllByListIdentifier($_GET['competencies']))) {
            return static::throwNotFoundError('Competencies list required');
        }

        // query demonstrations sums
        try {
            $demonstrationSkills = DB::allRecords('
                 SELECT Demonstration.ID AS DemonstrationID,
                        Demonstration.StudentID,
                        Demonstration.Demonstrated,
                        DemonstrationSkill.SkillID,
                        DemonstrationSkill.TargetLevel,
                        DemonstrationSkill.DemonstratedLevel,
                        DemonstrationSkill.Override,
                        DemonstrationSkill.ID
                   FROM (SELECT ID
                           FROM `%1$s`
                          WHERE CompetencyID IN (%5$s)) AS Skill
                   JOIN `%2$s` DemonstrationSkill
                     ON DemonstrationSkill.SkillID = Skill.ID
                   JOIN (SELECT ID, StudentID, UNIX_TIMESTAMP(Demonstrated) AS Demonstrated
                           FROM `%3$s`
                          WHERE StudentID = %6$u) Demonstration
                     ON Demonstration.ID = DemonstrationSkill.DemonstrationID
                   JOIN (SELECT StudentID, MAX(Level) AS CurrentLevel
                           FROM `%4$s`
                          WHERE StudentID = %6$u AND CompetencyID IN (%5$s)
                          GROUP BY StudentID) StudentCompetency
                     ON StudentCompetency.StudentID = Demonstration.StudentID
                    AND StudentCompetency.CurrentLevel = DemonstrationSkill.TargetLevel'
                ,[
                    Skill::$tableName                   // 1
                    ,Demonstrations\DemonstrationSkill::$tableName     // 2
                    ,Demonstrations\Demonstration::$tableName          // 3
                    ,StudentCompetency::$tableName      // 4
                    ,implode(',', array_map(function($Competency) {
                        return $Competency->ID;
                    }, $competencies))                  // 5
                    ,$Student->ID                       // 6
                ]
            );
        } catch (TableNotFoundException $e) {
            $demonstrationSkills = [];
        }

        // cast strings to integers
        foreach ($demonstrationSkills AS &$demonstrationSkill) {
            $demonstrationSkill['DemonstrationID'] = intval($demonstrationSkill['DemonstrationID']);
            $demonstrationSkill['Demonstrated'] = intval($demonstrationSkill['Demonstrated']);
            $demonstrationSkill['StudentID'] = intval($demonstrationSkill['StudentID']);
            $demonstrationSkill['SkillID'] = intval($demonstrationSkill['SkillID']);
            $demonstrationSkill['TargetLevel'] = intval($demonstrationSkill['TargetLevel']);
            $demonstrationSkill['DemonstratedLevel'] = intval($demonstrationSkill['DemonstratedLevel']);
            $demonstrationSkill['Override'] = boolval($demonstrationSkill['Override']);
            $demonstrationSkill['ID'] = intval($demonstrationSkill['ID']);
        }

        return static::respond('demonstrationSkills', [
            'data' => $demonstrationSkills
        ]);
    }

    protected static function _getRequestedStudent()
    {
        if (
            !empty($_GET['student']) &&
            $GLOBALS['Session']->hasAccountLevel('Staff')
        ) {
            if (!$Student = PeopleRequestHandler::getRecordByHandle($_GET['student'])) {
                return static::throwNotFoundError('Student not found');
            }
        } else {
            $Student = $GLOBALS['Session']->Person;
        }

        if (!$Student->isA(Student::class)) {
            return static::throwInvalidRequestError('Requested user is not a student');
        }

        return $Student;
    }

    protected static function _getRequestedContentArea()
    {
        $ContentArea = null;

        if (!empty($_GET['content-area'])) {
            if (!$ContentArea = ContentAreasRequestHandler::getRecordByHandle($_GET['content-area'])) {
                return static::throwNotFoundError('Content area not found');
            }
        }

        return $ContentArea;
    }
}