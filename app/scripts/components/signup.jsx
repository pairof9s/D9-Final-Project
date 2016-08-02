var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');

var models = require('../models/students');
var User = require('../models/students');


var Signup = React.createClass({
  render: function(){
    return (
      <div>
        <div className="row col-md-8 group-table">
          <div className="icon-third"><img src="images/PoolParty_logo.png"></img></div>
          <div><h1 id="page-title">Register to join Pool Party</h1></div>
          <div className="sect-sep">
            <p>This is copy that instructs on how to register as a new user in Pool Party. You must know your child’s current school. Registration will require name, address, phone, and confirmation via email link provided.</p>
          </div>
        </div>
        <div className="row rules"></div>
        <div className="row col-md-4">
          <h3>Is this your child?</h3>
          <h5>Johnny Nine</h5><p>Beck Middle School, Grade 6, Birth date: 05/22/2004</p>
        </div>
        <div className="select-right col-md-2">
          <div className="radio">
            <label>
              <input type="radio" name="optionsRadios" id="optionsRadios1" value="true" checked />
              Yes
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" name="optionsRadios" id="optionsRadios2" value="false" />
              No
            </label>
          </div>
          <button type="submit" className="btn btn-warning btn-sm">Confirm</button>
        </div>
        <div className="row rules"></div>
        <section className="signup-sect">
          <h3>Primary Parent’s Information:</h3>
          <div className="row col-md-6">
            <div className="reg-form">
              <form className="col-xs-10">
                <div className="form-group col-xs-4 col-md-4">
                    <label htmlFor="firstname1" className="control-label">First Name</label>
                    <input type="text" value='' className="form-control" id="firstname1" placeholder="Enter first name..." />
                </div>
                <div className="form-group col-xs-4 col-md-4">
                    <label htmlFor="lastname1" className="control-label">Last Name</label>
                    <input type="text" value='' className="form-control" id="lastname1" placeholder="Enter last name..." />
                </div>
                <div className="form-group col-xs-12">
                  <label htmlFor="street1" className="control-label">Street Address</label>
                  <input type="text" value='' className="form-control" id="street1" placeholder="Enter street address (no P.O.).." />
                </div>
                <div className="form-group col-xs-4 col-md-4">
                    <label htmlFor="city1" className="control-label">City</label>
                    <input type="text" value='' className="form-control" id="city1" placeholder="Enter city..." />
                </div>
                <div className="form-group col-xs-4 col-md-4">
                    <label htmlFor="state1" className="control-label">State</label>
                    <input type="text" value='' className="form-control" id="state1" placeholder="Enter state..." />
                </div>
                <div className="form-group col-xs-4 col-md-4">
                    <label htmlFor="zip1" className="control-label">Zip Code</label>
                    <input type="text" value='' className="form-control" id="zip1" placeholder="e.g. 00000" />
                </div>
                <div className="form-group col-xs-6">
                    <label htmlFor="phone1" className="control-label">Primary Phone</label>
                    <input type="text" value='' className="form-control" id="phone1" placeholder="e.g. 000-000-0000" />
                </div>
                <div className="form-group col-xs-6">
                    <label htmlFor="email1" className="control-label">Email</label>
                    <input type="email" value='' className="form-control" id="email1" placeholder="Enter email address..." />
                </div>
                <button type="submit" className="btn btn-warning pull-right">Register</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    )
  }
});



module.exports = Signup;
