/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('AggregridExample.Application', {
    extend: 'Ext.app.Application',
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox'
    ],


    name: 'AggregridExample',

    views: [
        'MyAggregrid'
    ],

    stores: [
        'Students',
        'TimePeriods',
        'Absences'
    ],

    mainView: 'AggregridExample.view.MyAggregrid',

    launch: function () {
        window.mainView = this.getMainView();
    },

    control: {
        'app-myaggregrid': {
            beforerefresh: function() {
                console.info('app.myaggregrid->beforerefresh');
            },
            refresh: function() {
                console.info('app.myaggregrid->refresh');
            },
            beforeaggregate: function() {
                console.info('app.myaggregrid->beforeaggregate');
            },
            aggregate: function() {
                console.info('app.myaggregrid->aggregate');
            }
        }
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});