var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');

var NavTitle = React.createClass({
  handleSignOut: function(){
    localStorage.clear();
  },
  render: function(){
    var user = JSON.parse(localStorage.getItem('user'));
    //console.log('user', user);
    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="profile-display-heading">
            <div className="icon-third"><a href="#"><img src="images/PoolParty_purplelog.png"></img></a></div>
            <h1 className="main-page-heading">{user.username}</h1>
          </div>
          <div className="btn btn-success btn-xs pull-right">
            <a href="#" className="main-page-sign-out"><span onClick={this.handleSignOut}>Sign Out</span></a>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = {
  'NavTitle': NavTitle,
};
