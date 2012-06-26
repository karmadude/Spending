define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'text!templates/spendingtable.html'
], function($, _, Backbone, Mustache, spendingTableTemplate) {
  var SpendingDataView = Backbone.View.extend({
      tagName: 'section',
      className: 'data',

      initialize: function() {
      },

      render: function() {
        this.$el.html(Mustache.render(spendingTableTemplate, {
          spending: this.collection.toJSON(),
          total: this.collection.getTotal()
        }));
        return this;
      }
    });

  return SpendingDataView;
});
