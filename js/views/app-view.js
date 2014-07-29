var app = app || {};

(function(){
  'use strict';

  app.AppView = Backbone.View.extend({

    initialize: function(){

      var _defaultSlices = ['Work', 'Life', 'Love', 'Friends'];
      _.forEach(_defaultSlices, function(_sliceName){
        console.log(_sliceName);
      });
    }

  });

})(jQuery);