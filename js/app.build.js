({
    appDir: "../",
    baseUrl: "js",
    dir: "../../../ljbuild",
    paths: {
      jquery: 'lib/jquery/jquery-1.7.2.min',
      underscore: 'lib/underscore-min',
      backbone: 'lib/backbone/backbone-min',
      highcharts: 'lib/highcharts',

      text: 'lib/require/text',
      mustache: 'lib/require/mustache'
    },
    modules: [
        {
            name: "main"
        }
    ]
})