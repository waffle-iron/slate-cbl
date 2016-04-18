var harness = new Siesta.Harness.Browser.ExtJS();

harness.configure({
    title: 'Aggregrid Tests'
});

harness.start(
    {
        group: 'Unit Tests',
        preload: [
            '../ext-6.0.1.250/build/ext-all.js',
            '../packages/jarvus-aggregrid/src/Aggregrid.js'
        ],
        items: [
            'jarvus-aggregrid/010_sanity.t.js',
            'jarvus-aggregrid/020_fully-configured.t.js',
            'jarvus-aggregrid/021_render-later.t.js',
            'jarvus-aggregrid/022_stores-after-render.t.js',
            'jarvus-aggregrid/023_render-after-stores.t.js',
            'jarvus-aggregrid/024_render-between-stores.t.js'
        ]
    },
    {
        group: 'Application Tests',
        pageUrl: '../AggregridExample/index.html',
        items: [
            'AggregridExample/010_sanity.t.js'
        ]
    }
);