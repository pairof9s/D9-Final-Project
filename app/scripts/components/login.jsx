var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');

var Session = require('../models/students').Session;


var LoginForm = React.createClass({
  getInitialState: function(){
    return {
      'email1': '',
      'email2': '',
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
      email1: this.state.email1,
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
    this.setState({email1: e.target.value})
  },
  render: function(){
    return (
      <div className="wrapper">
        <div className="row col-sm-6 col-md-4 col-lg-3">
          <div className="log-frame">
            <div className="log-top">
              <div className="icon-lrg">
                <img src="images/PoolParty_purplelogtag.png"></img>
              </div>
              <div>
                <p>Welcome! Sign on to join your Group, or to create a new one if this is your first login.</p>
              </div>
            </div>
            <div className="log-sect">
              <div>
                <h3 id="form-title">Log In...</h3>
              </div>
              <form onSubmit={this.handleLoginSubmit}>
                <label htmlFor="email1">User Email</label>
                <input onChange={this.handleUsernameChange} type="email1" className="form-control log-entry" id="email1" placeholder="Enter Email Address"></input>
                <label htmlFor="password">Password</label>
                <input onChange={this.handlePasswordChange} type="password" className="form-control log-entry" id="password" placeholder="Enter Password"></input>
                <input type="submit" className="btn btn-success btn-sm" value="Login"></input>
              </form>
            </div>
            <div className="log-sect">
              <div className="open-links">Not signed up yet? <a href="#signup/">Click here</a></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});


module.exports = LoginForm;
