var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var Welcome = require('./components/welcome.jsx');
var LoginForm = require('./components/login.jsx');
var Signup = require('./components/signup.jsx')
// var RegisterForm = require('./components/register.jsx');
var GroupSetup = require('./components/group-setup.jsx').GroupSetup;
var GroupMap = require('./components/map.jsx').GroupMap;


var Router = Backbone.Router.extend({
  routes: {
    '': 'welcomeController',
    'login/': 'loginController',
    'signup/': 'signupController',
    'groups/': 'groupCreate',
    'groups/:id/edit/': 'groupAddChange',
    'schedules/': 'scheduleController'
  },
  // initialize: function(){
  //
  // },
  welcomeController: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(Welcome, {router: self}),
      document.getElementById('container')
    )
  },
  loginController: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(LoginForm, {router: self}),
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
  // registerController: function(){
  //   var self = this;
  //   ReactDOM.render(
  //     React.createElement(RegisterForm, {router: self}),
  //     document.getElementById('container')
  //   );
  // },
  groupCreate: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(GroupSetup, {router: self}),
      document.getElementById('container')
    );
  },
  groupAddChange: function(id){
    ReactDOM.render(
      React.createElement(RecipeForm, {router: this, editId: id}),
      document.getElementById('container')
    );
  },
  scheduleController: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(ScheduleMap, {router: self}),
      document.getElementById('container')
    );
  },
});

var router = new Router();


module.exports = router;
