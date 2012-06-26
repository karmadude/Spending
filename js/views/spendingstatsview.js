define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'text!templates/spendingstats.html'
], function($, _, Backbone, Mustache, statsTemplate) {
  var SpendingInfoView = Backbone.View.extend({
    tagName: 'section',
    className: 'stats',

    initialize: function() {
    },

    render: function() {
      this.$el.append(Mustache.render(statsTemplate, {
        stats: [
          {title: 'Top Category', value: '$1,071', detail: ' on Home'},
          {title: 'Most Purchases', value: '49', detail: ' on Food &amp; Dining'}
        ]
      }));
      this.$el.append('<div style="clear:both"></div>');
      return this;
    }
  });

  return SpendingInfoView;
});