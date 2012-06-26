define([
  'jquery',
  'underscore',
  'backbone',
  'views/spendingdataview',
  'views/spendingstatsview'
], function($, _, Backbone, SpendingDataView, SpendingStatsView) {
  var SpendingInfoView = Backbone.View.extend({
    tagName: 'section',
    className: 'info',

    initialize: function() {
      this.dataView = new SpendingDataView({collection: this.collection});
      this.statsView = new SpendingStatsView();
    },

    render: function() {
      this.$el.append(this.dataView.render().$el);
      this.$el.append(this.statsView.render().$el);
      this.$el.append('<div style="clear:both"></div>');
      return this;
    }
  });

  return SpendingInfoView;
});