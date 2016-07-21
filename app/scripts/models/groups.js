var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');


var Group = Backbone.Model.extend({
  // idAttribute: "objectId"
});


var GroupCollection = Backbone.Collection.extend({
  model: Group,
  url: 'https://d9-dev-server.herokuapp.com/classes/D9groups/',
  parser: function(serverResponse){
  return serverResponse.results;
}
});

module.exports = {
  'Group': Group,
  'GroupCollection': GroupCollection
}
