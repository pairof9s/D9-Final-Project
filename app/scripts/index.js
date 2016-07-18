var $ = window.jQuery = require('jquery');

var Backbone = require('backbone');


$.ajaxSetup({
  beforeSend: function(xhr){
    xhr.setRequestHeader("X-Parse-Application-Id", "tiygvl");
    xhr.setRequestHeader("X-Parse-REST-API-Key", "slumber");
  }
});
require('./router');

$(function(){
Backbone.history.start();
});
