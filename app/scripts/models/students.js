var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');


var User = Backbone.Model.extend({
  idAttribute: 'objectId',
  defaults: {
    username: '',
    password: ''
  },
  urlRoot: 'https://d9-dev-server.herokuapp.com/classes/D9students',
  login: function(username, password){
    var loggedInUser = new User();
    var queryString = 'username' + username + 'password' + password;
    loggedInUser.urlRoot = 'https://d9-dev-server.herokuapp.com/classes/D9students?' + queryString;
    return loggedInUser.fetch();
    }
});

var Session = Backbone.Model.extend({
  
});


var StudentCollection = Backbone.Collection.extend({
  model: User,
  url: 'https://d9-dev-server.herokuapp.com/classes/D9students/',
  parser: function(serverResponse){
  return serverResponse.results;
}
});

module.exports = {
  'User': User,
  'StudentCollection': StudentCollection,
  'Session': Session
};
