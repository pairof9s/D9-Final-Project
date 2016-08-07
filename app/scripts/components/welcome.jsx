var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');

var Session = require('../models/students').Session;

var Welcome = React.createClass({
  getInitialState: function(){
    return {
    };
  },
  render: function(){
    return (
      <div>
        <div className="welc-area col-md-offset-3 col-md-6">
          <div className="welc-box-b">
            <div className="welc-logo">
              <div>
                <img src="images/PoolParty_purplelogtag.png"></img>
              </div>
              <div className="log-copy">
                <p>Welcome to the app that makes it easy to create and join a school car pool for you little students! Here’s <a href="#B">how it works...</a></p>
                <p><a href="#signup/">Click here</a> if you’re wanting to join!</p>
              </div>
            </div>
          </div>
          <div className="welc-box-a">
            <div className="welc-login">
              <div>
                <h3 id="form-title">Log In...</h3>
              </div>
              <form onSubmit={this.handleLoginSubmit}>
                <label htmlFor="username">User Name</label>
                <input onChange={this.handleUsernameChange} type="username" className="form-control log-entry" id="username" placeholder="Enter Username"></input>
                <label htmlFor="password">Password</label>
                <input onChange={this.handlePasswordChange} type="password" className="form-control log-entry" id="password" placeholder="Enter Password"></input>
                <input type="submit" className="btn btn-success btn-sm pull-right" value="Login"></input>
              </form>
              <div className="open-links">Not signed up yet? <a href="#signup/">Click here</a>
              </div>
            </div>
          </div>
          <div className="welc-box-a">
            <div className="welc-info">
              <p>One of the hardest aspects of your children attending school is getting them there and back! Often, there is no easy way for you personally to transport them, and even harder to find other parents who might have interest in a car pool to lessen the daily commitment.</p>
              <p>That’s where Pool Party comes in.</p>
              <p>With Pool Party, you just sign up by telling us some brief information about you & your child, their school, and then we send you an invitation to register and get started.</p>
              <p>Within no time, you can create your own car pool group, have a schedule set up, and be provided with directions on where each Group member lives…and all based on the school your child attends and convenience to where you live.</p>
              <p>So sign up today and we’ll provide you with information on how to quickly become a member of your own car pool!</p>
              <p>Let’s get this Pool Party started!</p>
            </div>
          </div>
          <div className="welc-box-b">
            <div className="welc-art">
              <img src="./images/welcome.png" />
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Welcome;