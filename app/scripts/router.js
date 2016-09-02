var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var Welcome = require('./components/welcome.jsx');
var Signup = require('./components/signup.jsx');
var GroupSetup = require('./components/group-setup.jsx').GroupSetup;
var GroupMap = require('./components/map.jsx');


var Router = Backbone.Router.extend({
  routes: {
    '': 'welcomeController',
    'index': 'welcomeController',
    'signup/': 'signupController',
    'groups/': 'groupCreate',
    'schedules/': 'scheduleController'
  },
  welcomeController: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(Welcome, {router: self}),
      document.getElementById('container')
    )
  },
  signupController: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(Signup, {router: self}),
      document.getElementById('container')
    );
  },
  groupCreate: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(GroupSetup, {router: self}),
      document.getElementById('container')
    );
  },
  scheduleController: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(GroupMap, {router: self}),
      document.getElementById('container')
    );
  },
});

var router = new Router();


module.exports = router;
