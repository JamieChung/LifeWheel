var app = app || {};

(function($){
  'use strict';

  app.Slice = Backbone.Model.extend({
    defaults: {
      name: '',
      percent: '50'
    }
  });

})(jQuery);