define([
  'jquery',
  'underscore',
  'backbone',
  'highcharts',
  'models/expensemodel'
], function($, _, Backbone, Highcharts, Expense) {
  var Expenses = Backbone.Collection.extend({
    model: Expense,

    getTotal: function() {
      var values = this.pluck('value');
      return Highcharts.numberFormat(values.reduce(function(memo,num){
        return parseFloat(memo) + parseFloat(num);
      }, 0.0), 2);
    },

    toJSON: function() {
      var c = [];
      this.each(function(e) {
        c.push({category: e.get('category'), value:Highcharts.numberFormat(e.get('value'), 2)});
      });
      return c;
    }
  });

  return Expenses;
});