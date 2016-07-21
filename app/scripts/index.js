var $ = window.jQuery = require('jquery');

var Backbone = require('backbone');


// $.ajaxSetup({
//   beforeSend: function(xhr){
//     xhr.setRequestHeader("X-Parse-Application-Id", "d9-id99");
//     xhr.setRequestHeader("X-Parse-REST-API-Key", "d9-rest99");
//   }
// });

require('./router');

$(function(){
Backbone.history.start();
});
