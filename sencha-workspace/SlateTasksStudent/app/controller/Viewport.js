Ext.define('SlateTasksStudent.controller.Viewport', {
    extend: 'Ext.app.Controller',
    requires: [
        'Slate.API'
    ],

    views: [
        'TaskTree@Slate.cbl.view.student',
        'TodoList@Slate.cbl.view.student'
    ],

    config: {
        refs: {
            taskTree: {
                selector: 'slate-tasktree',
                autoCreate: true,

                xtype: 'slate-tasktree'
            },
            todoList: {
                selector: 'slate-todolist',
                autoCreate: true,

                xtype: 'slate-todolist'
            }
        },
    },

    onLaunch: function () {
        // render dashboard
        this.getTaskTree().render('slate-tasktree');
        this.getTodoList().render('slate-todolist');
    }
});