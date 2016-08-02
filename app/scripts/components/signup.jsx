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
        <div className="row"></div>
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
            <button type="submit" className="btn btn-success btn-sm">Confirm</button>
          </div>
          <div className="col-md-8 sect-sep"></div>
        <section className="row">
          <div className="col-md-8">
            <h3>Primary Parent’s Information:</h3>
            <div className="row col-md-8">
              <div className="reg-form">
                <form className="col-xs-12">
                  <div className="form-group col-xs-6 col-md-6">
                      <label htmlFor="firstname1" className="control-label">First Name</label>
                      <input type="text" value='' className="form-control" id="firstname1" placeholder="Enter first name..." />
                  </div>
                  <div className="form-group col-xs-6 col-md-6">
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
                      <select type="text" value='state' className="form-control" id="state1">
                        <option value="">Select...</option>
                        <option value="AK">Alaska</option>
                        <option value="AL">Alabama</option>
                        <option value="AR">Arkansas</option>
                        <option value="AZ">Arizona</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DC">District of Columbia</option>
                        <option value="DE">Delaware</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="IA">Iowa</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MD">Maryland</option>
                        <option value="ME">Maine</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MO">Missouri</option>
                        <option value="MS">Mississippi</option>
                        <option value="MT">Montana</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="NE">Nebraska</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NV">Nevada</option>
                        <option value="NY">New York</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VA">Virginia</option>
                        <option value="VT">Vermont</option>
                        <option value="WA">Washington</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WV">West Virginia</option>
                        <option value="WY">Wyoming</option>
                      </select>
                  </div>
                  <div className="form-group col-xs-4 col-md-4">
                      <label htmlFor="zip1" className="control-label">Zip Code</label>
                      <input type="text" value='' className="form-control" id="zip1" placeholder="Ex. 00000" />
                  </div>
                  <div className="form-group col-xs-6">
                      <label htmlFor="phone1" className="control-label">Primary Phone</label>
                      <input type="text" value='' className="form-control" id="phone1" placeholder="Ex. 000-000-0000" />
                  </div>
                  <div className="form-group col-xs-6">
                      <label htmlFor="email1" className="control-label">Email</label>
                      <input type="email" value='' className="form-control" id="email1" placeholder="Enter email address..." />
                  </div>
                  <button type="submit" className="btn btn-info btn-sm">Add Secondary Parent <span className="glyphicon glyphicon-plus-sign" /></button>
                  <button type="submit" className="btn btn-success pull-right">Register</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
});



module.exports = Signup;
