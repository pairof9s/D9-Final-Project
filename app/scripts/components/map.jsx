var React = require('react');
var Backbone = require('backbone');
// var $ = require('jquery');

// var Group = require('../models/groups').Group;
// var GroupCollection = require('../models/groups').GroupCollection;


var GroupMap = React.createClass({
  getInitialState: function(){
    return {
    };
  },
  render: function(){
    return (
      <div>
        <div className="col-xs-offset-1 col-xs-10 col-md-offset-3 col-md-6">
          <div className="icon-third">
            <img src="images/PoolParty_purplelog.png"></img>
          </div>
          <div>
            <h1 id="page-title">Hi, David!</h1>
          </div>
          <div className="sect-sep">
            <p>This is copy that welcomes Primary/Secondary parent’s name and the Student’s name. Information concerning the Student’s school & class level, their parent’s name, home address and email. The lower level will contain the current month’s schedule as well as a request board for schedule changes.</p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h3>Map Area</h3>
            </div>
            <div>

            </div>
          </div>
          <div className="sect-sep"></div>
          <div className="row">
            <div className="col-md-6">
              <h3>Schedule Area</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = GroupMap;

// Google Map key >>  AIzaSyCTxwfw21PFbas9U69kH7ZhmmtvGWgjzJU
