var app = app || {};

(function($){
  'use strict';

  var Slices = Backbone.View.Collection({
    model: app.Slice
  });

  app.slices = new Slices();

})(jQuery);