require.config({
    baseUrl: 'static/',
    shim: {
        underscore: {
            exports: '_'
        }
    },
    paths: {
        jquery: 'lib/jquery',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone'
    }
});

require(['jquery','backbone','app'], function($, Backbone, AppView) {
    console.log('start');
    var appView = new AppView();
})