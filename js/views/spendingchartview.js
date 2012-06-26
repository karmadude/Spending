define([
  'jquery',
  'underscore',
  'backbone',
  'highcharts'
], function($, _, Backbone, Highcharts) {
  var SpendingChartView = Backbone.View.extend({
    tagName: 'section',
    className: 'chart',

    initialize: function() {
      
    },

    getChartData: function() {
      var d = [];
      this.collection.each(function(expense) {
        d.push([expense.get('category'), expense.get('value')]);
      });

      return d;
    },

    render: function() {
      this.renderChart();
      return this;
    },

    renderChart: function() {
      var self = this;
      var chart = new Highcharts.Chart({
        chart: {
          renderTo: self.el,
          width: 720,
          backgroundColor: '#e8e8e8',
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false
        },
        title: {
          text: ' '
        },
        tooltip: {
          formatter: function() {
            return '<b>'+ this.point.name +'</b>: '+ Highcharts.numberFormat(this.percentage, 2) +' %';
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              color: '#6c6c6c',
              connectorColor: '#ccc',
              softConnector: true,
              distance: 80,
              formatter: function() {
                return '<b>'+ this.point.name +'</b>: '+ Highcharts.numberFormat(this.percentage, 2)   +' %';
              }
            }
          }
        },
        series: [{
          type: 'pie',
          name: 'Spending',
          data: self.getChartData()
        }]
      });
    }
  });

  return SpendingChartView;
});