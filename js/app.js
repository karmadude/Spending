define([
  'jquery',
  'underscore',
  'backbone',
  'collections/expensescollection',
  'views/spendingview'
], function($, _, Backbone, Expenses, SpendingView){
  var Controller = Backbone.Router.extend({
    routes: {
      "spending/:month/:year": "monthlySpending"
    },

    monthlySpending: function(month, year) {
      var spending = new Expenses([
        {"category": "Home", "value":1071.23},
        {"category": "Health & Fitness", "value":895.41},
        {"category": "Food & Dining", "value":880.11},
        {"category": "Fees & Charges", "value":250.00},
        {"category": "Shopping", "value":194.81},
        {"category": "Bills & Utilities", "value":194.02},
        {"category": "Travel", "value":164.88},
        {"category": "Personal Care", "value":147.71},
        {"category": "Auto & Transport", "value":126.51},
        {"category": "Entertainment", "value":16.26},
        {"category": "Kids", "value":10.30},
        {"category": "Education", "value":4.90},
        {"category": "Business Services", "value":0.69}
      ]);

      $(document).attr('title', 'Spending: May 2012 - Liji Jinaraj');
      $('header h1').html('Spending: May 2012');

      var spendingView = new SpendingView({collection:spending});
      $('.container').html(spendingView.render().$el);
    }
  });

  var energize = function(){
    var c = new Controller();
    Backbone.history.start();
  };

  return {energize: energize};
});
