var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');

// var fs = require("fs");
// var browserify = require("browserify");
// browserify("./script.js")
//   .transform("babelify", {presets: ["es2015", "react"]})
//   .bundle()
//   .pipe(fs.createWriteStream("bundle.js"));

var models = require('../models/students');
var User = require('../models/students');
var Group = require('../models/groups');
var GroupCollection = require('../models/groups').GroupCollection;


var GroupMap = React.createClass({
  getInitialState: function(){
    return {
    };
  },
  render: function(){
    return (
      <div className="col-md-10 group-table">
        <div className="icon-third"><img src="images/PoolParty_logo.png"></img></div>
        <div><h1 id="page-title">Hi, David!</h1></div>
        <div className="sect-sep">
          <p>This is copy that welcomes Primary/Secondary parent’s name and the Student’s name. Information concerning the Student’s school & class level, their parent’s name, home address and email. The lower level will contain the current month’s schedule as well as a request board for schedule changes.</p>
        </div>
        <div className="row col-sm-9">
          <div>
            <div><h3>Map Area</h3></div>
            <div>
              <h5>Schedule Area</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = GroupMap;

// Google Map key >>  AIzaSyCTxwfw21PFbas9U69kH7ZhmmtvGWgjzJU
