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
      <div className="wrapper">
        <div className="row col-sm-6 col-md-4 col-lg-3">
          <div className="log-frame">
            <div className="log-top">
              <div className="icon-lrg">
                <img src="images/PoolParty_purplelogtag.png"></img>
              </div>
              <div>
                <p>Welcome! Login to join your Group or to get a new one started. <a href="#signup/">Click here</a> if you’re looking to join!</p>
              </div>
            </div>
            <div className="log-sect">
              <div>
                <h3 id="form-title">Log In...</h3>
              </div>
              <form onSubmit={this.handleLoginSubmit}>
                <label htmlFor="username">User Name</label>
                <input onChange={this.handleUsernameChange} type="username" className="form-control log-entry" id="username" placeholder="Enter Username"></input>
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
