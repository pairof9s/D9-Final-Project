var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');

var Session = require('../models/students').Session;


var LoginForm = React.createClass({
  getInitialState: function(){
    return {
      'username': '',
      'password': ''
    };
  },
  componentWillMount: function(){
    var self = this;
  },
  handleLoginSubmit: function(e){
    e.preventDefault();
    var self = this;

    var session = new Session();
    session.authenticate({
      username: this.state.username,
      password: this.state.password
    });

    session.on('authenticationSucceeded', function(){
      self.props.router.navigate('groups/', {trigger: true})
    });
  },
  handlePasswordChange: function(e){
    this.setState({password: e.target.value})
  },
  handleUsernameChange: function(e){
    this.setState({username: e.target.value})
  },
  render: function(){
    return (
      <div className="col-md-2 log-form">
        <div className="row">
          <div className="log-sect">
            <h4 id="form-title"><span className="glyphicon glyphicon-log-in log-icon"></span>Log In...</h4>
          </div>
          <form onSubmit={this.handleLoginSubmit}>
            <label htmlFor="username">User Name</label>
            <input onChange={this.handleUsernameChange} type="username" className="form-control log-entry" id="username" placeholder="Enter Username"></input>
            <label htmlFor="password">Password</label>
            <input onChange={this.handlePasswordChange} type="password" className="form-control log-entry" id="password" placeholder="Enter Password"></input>
            <input type="submit" className="btn btn-warning btn-sm pull-right" value="Login"></input>
          </form>
        </div>
        <div className="row">
          <div className="open-links">Not signed up yet? <a href="#signup/">Click here</a></div>
        </div>
      </div>
    )
  }
});


module.exports = LoginForm;
