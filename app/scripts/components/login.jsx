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
                <img src="images/PoolParty_logo_tag.png"></img>
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
        <div className="col-sm-6 col-lg-offset-1 col-lg-5">
          <div className="log-info">
            <p><img src="images/motifs/books.png" className="responsive" />One of the hardest aspects of your children attending school is getting them there and back! <img src="images/motifs/mom.png" className="responsive" /><img src="images/motifs/dad.png" className="responsive" />Often, there is no easy way for you personally to transport them, and even harder to find other parents who might have interest in a car pool to lessen the daily commitment.</p>
            <p>That’s where Pool Party comes in.</p><img src="images/motifs/car.png" className="responsive" align="right" />
            <p>With Pool Party, you just sign up by telling us some brief information about you & your child, their school, and then we send you an invitation to register and get started.</p><img src="images/motifs/devices.png" className="responsive" />
            <p><img src="images/motifs/group.png" align="middle" className="responsive" />Within no time, you can create your own car pool group, have a schedule set up , and be provided with directions on where each Group member lives…and all based on the school your child attends and convenience to where you live.<img src="images/motifs/map.png" className="responsive" /></p>
            <p>So sign up today and we’ll provide you with information on how to quickly become a member of your own car pool!</p>
            <img src="images/motifs/approve.png" className="responsive" /><p>Let’s get this Pool Party started!</p>
          </div>
        </div>
      </div>
    )
  }
});


module.exports = LoginForm;
