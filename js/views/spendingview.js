define([
  'jquery',
  'underscore',
  'backbone',
  'views/spendingchartview',
  'views/spendinginfoview'
], function($, _, Backbone, SpendingChartView, SpendingInfoView) {
  var SpendingView = Backbone.View.extend({
    tagName: 'section',
    className: 'spending',

    initialize: function() {
      this.chartView = new SpendingChartView({collection: this.collection});
      this.infoView = new SpendingInfoView({collection: this.collection});
    },

    render: function() {
      this.$el.append(this.chartView.render().$el);
      this.$el.append(this.infoView.render().$el);
      return this;
    }
  });

  return SpendingView;
});