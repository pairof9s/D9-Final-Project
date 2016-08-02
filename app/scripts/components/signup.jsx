var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');

var models = require('../models/students');
var User = require('../models/students');


var Signup = React.createClass({
  render: function(){
    return (
      <div>
        <div className="col-md-10 group-table">
          <div className="icon-third"><img src="images/PoolParty_logo.png"></img></div>
          <div><h1 id="page-title">Welcome, David!</h1></div>
          <div className="sect-sep">
            <p>Now that you're a Pool Party member, let's start with creating a Group. The Students you'll see listed below live within a 2-mile radius of your home. This makes it convenient for both them and you to join together.</p>
          </div>
        </div>
      </div>
    )
  }
});



module.exports = Signup;
