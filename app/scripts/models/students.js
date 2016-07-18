var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');


var Student = Backbone.Model.extend({
  idAttribute: "objectId"
});


var StudentCollection = Backbone.Collection.extend({
  model: Student,
  url: 'https://d9-dev-server.herokuapp.com/classes/D9students/',
  parser: function(serverResponse){
  return serverResponse.results;
}
});

module.exports = {
  'Student': Student,
  'StudentCollection': StudentCollection
}
