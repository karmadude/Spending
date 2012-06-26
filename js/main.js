/*
 * liji.jinaraj.com
 * Copyright (c) VUnite Media
*/

require.config({
  baseUrl: 'js',

  paths: {
    jquery: 'lib/jquery/jquery-1.7.2.min',
    underscore: 'lib/underscore-min',
    backbone: 'lib/backbone/backbone-min',
    highcharts: 'lib/highcharts',

    text: 'lib/require/text',
    mustache: 'lib/require/mustache'
  },

  shim: {
    'underscore': {
      exports: '_'
    },

    'backbone': {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
    },

    'highcharts': {
        deps: ['jquery'],
        exports: 'Highcharts'
    }
  }
});

require(['app'], function(SpendingApp) {
  SpendingApp.energize();
});
