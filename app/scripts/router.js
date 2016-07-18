var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var AppContainer = require('./components/app.jsx');


var Router = Backbone.Router.extend({
  routes: {
    '': 'indexController',
    'login/': 'loginController',
    'signup/': 'signupController',
    'groups/': 'groupList',
    'groups/create/': 'groupAddChange',
    'groups/:id/edit/': 'groupAddChange',
    '/groups/:id': 'groupDetail'
  },
  initialize: function(){

  },
  indexController: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(AppContainer, {router: self}),
      document.getElementById('container')
    );
  },
  loginController: function(){
    console.log('login');
    var self = this;
    ReactDOM.render(
      React.createElement(LoginForm, {router: self}),
      document.getElementById('container')
    )
  },

});

var router = new Router();


module.exports = router;
