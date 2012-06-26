define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  var Expense = Backbone.Model.extend({
      defaults: {
        'category': '',
        'value': 0.00
      }
    });

  return Expense;
});