Ext.define('Slate.cbl.view.teacher.GridLegend', {
    extend: 'Ext.Component',
    xtype: 'slate-gridlegend',

    tpl: [
        '<div class="slate-gridlegend">',
            '<div class="slate-gridlegend-title">Legend</div>',
            '<ul class="slate-gridlegend-items">',
                '<tpl for=".">',
                    // TODO more generic
                    '<li class="slate-gridlegend-item slate-task-status-{cls} <tpl for="flags">slate-task-status-{.}</tpl>">',
                        '<span class="slate-gridlegend-swatch"></span>',
                        '<span class="slate-gridlegend-label">{title}</span>',
                    '</li>',
                '</tpl>',
            '</ul>',
        '</div>'
    ],

    data: [
        {
            cls: 'notassigned',
            title: 'Not Assigned'
        },
        {
            cls: 'due',
            title: 'Due'
        },
        {
            cls: 'due',
            title: 'Needs Rated',
            flags: [
                'needsrated'
            ]
        },
        {
            cls: 'completed',
            title: 'Completed'
        },
        {
            cls: 'revision',
            title: 'Revision Assigned'
        },
        {
            cls: 'revision',
            title: 'Revision, Needs Rated',
            flags: [
                'needsrated'
            ]
        },
        {
            cls: 'late',
            title: 'Past Due'
        },
        {
            cls: 'late',
            title: 'Late, Needs Rated',
            flags: [
                'needsrated'
            ]
        },
    ]
});