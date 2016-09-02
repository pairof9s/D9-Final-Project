var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');


function isDefined(val) { return val != null; }

var ToggleDisplay = React.createClass({

	propTypes: {
		hide: React.PropTypes.bool,
		show: React.PropTypes.bool
	},

	shouldHide: function() {
		var shouldHide;
		if(isDefined(this.props.show)) {
			shouldHide = !this.props.show;
		}
		else if(isDefined(this.props.hide)) {
			shouldHide = this.props.hide;
		}
		else {
			shouldHide = false;
		}

		return shouldHide;
	},

	render: function() {
		var style = {};

		if(this.shouldHide()) {
			style.display = 'none';
		}

		return (
			<span style={style} {...this.props} />
		);
	}

});

var Signup = React.createClass({
  getInitialState: function(){
    return {
      show: true
    };
  },
  componentWillMount: function(){
    var self = this;
  },
  handleSignupSubmit: function(e){
    e.preventDefault();
    var self = this;
    document.getElementById('heading').scrollIntoView();
    self.setState({ type: 'info', message: 'Sending...' }, self.sendFormData);
  },
  handleClick: function() {
      this.setState({ show: !this.state.show });
  },
  sendFormData: function () {
    // Fetch form values.
    var formData = {
      budget: React.findDOMNode(this.refs.budget).value,
      company: React.findDOMNode(this.refs.company).value,
      email: React.findDOMNode(this.refs.email).value
    };

    // Send the form data.
    var xmlhttp = new XMLHttpRequest();
    var _this = this;
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4) {
        var response = JSON.parse(xmlhttp.responseText);
        if (xmlhttp.status === 200 && response.status === 'OK') {
          _this.setState({ type: 'success', message: 'We have received your message and will get in touch shortly. Thanks!' });
        }
        else {
          _this.setState({ type: 'danger', message: 'Sorry, there has been an error. Please try again later or send us an email at info@example.com.' });
        }
      }
    };
    xmlhttp.open('POST', 'send', true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send(this.requestBuildQueryString(formData));
  },
  render: function(){
    if (this.state.type && this.state.message) {
    var classString = 'alert alert-' + this.state.type;
    var status = <div id="status" className={classString} ref="status">{this.state.message}</div>;
    }
    return (
      <div>
        <div className="col-xs-offset-1 col-xs-10 col-md-offset-3 col-md-6">
          <div className="row icon-third"><img src="images/PoolParty_purplelog.png"></img></div>
          <div className="row"><h1 id="page-title">Register to join Pool Party</h1></div>
          <div className="row sect-sep">
            <p>This is copy that instructs on how to register as a new user in Pool Party. You must know your child’s current school. Registration will require name, address, phone, and confirmation via email link provided.</p>
          </div>
        </div>
        <form className="" action="" onSubmit={this.handleSignupSubmit}>
          <div className="col-xs-offset-1 col-xs-10 col-md-offset-3 col-md-6">
            <div className="row">
              <h2>First, select your child!</h2>
            </div>
            <div className="row name-menu form-group">
              <select type="text" value='student' className="form-control" id="student">
                <option>Find their name...</option>
                <option>Johnny Nine</option>
                <option>Wanda Full</option>
                <option>Joe Kerr</option>
                <option>Syd Nee</option>
                <option>Jane Plane</option>
                <option>Tye Neetym</option>
                <option>Ben Dumm</option>
                <option>Robin DeRitch</option>
                <option>Tom Meie</option>
                <option>Sally Mander</option>
                <option>Frank Lee</option>
                <option>Deb Utawnt</option>
                <option>Jack Spratt</option>
                <option>Sally Mow</option>
              </select>
            </div>
            <div className="row">
              <div className="sect-sep"></div>
              <h3><img src="./images/parents.png" className="panel-art" />Primary Parent’s Information:</h3>
              <div className="col-md-10">
                <div className="form-group col-xs-6 col-md-6">
                    <label htmlFor="firstname1" className="control-label">First Name</label>
                    <input type="text" value='' className="form-control" id="firstname1" placeholder="First name..." />
                </div>
                <div className="form-group col-xs-6 col-md-6">
                    <label htmlFor="lastname1" className="control-label">Last Name</label>
                    <input type="text" value='' className="form-control" id="lastname1" placeholder="Last name..." />
                </div>
                <div className="form-group col-xs-12">
                  <label htmlFor="street1" className="control-label">Street Address</label>
                  <input type="text" value='' className="form-control" id="street1" placeholder="Street address (no P.O. Box)" />
                </div>
                <div className="form-group col-xs-4 col-md-4">
                    <label htmlFor="city1" className="control-label">City</label>
                    <input type="text" value='' className="form-control" id="city1" placeholder="City..." />
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
                      <input type="text" value='' className="form-control" id="zip1" placeholder="00000" />
                  </div>
                  <div className="form-group col-xs-6">
                      <label htmlFor="phone1" className="control-label">Primary Phone</label>
                      <input type="text" value='' className="form-control" id="phone1" placeholder="000-000-0000" />
                  </div>
                  <div className="form-group col-xs-6">
                      <label htmlFor="email1" className="control-label">Email</label>
                      <input type="email" value='' className="form-control" id="email1" placeholder="parent1@address.com" />
                  </div>
                  <button type="button" className="btn btn-info btn-sm pull-right" onClick={ this.handleClick }>Add Secondary Parent <span className="glyphicon glyphicon-plus-sign" /></button>
              </div>
            </div>
            <div className="row">
              <ToggleDisplay show={this.state.show}></ToggleDisplay>
              <ToggleDisplay hide={this.state.show}>
                <h3><img src="./images/parents2.png" className="panel-art" />Secondary Parent’s Information:</h3>
                <div className="col-md-10">
                    <div className="form-group col-xs-6 col-md-6">
                        <label htmlFor="firstname2" className="control-label">First Name</label>
                        <input type="text" value='' className="form-control" id="firstname2" placeholder="First name..." />
                    </div>
                    <div className="form-group col-xs-6 col-md-6">
                        <label htmlFor="lastname2" className="control-label">Last Name</label>
                        <input type="text" value='' className="form-control" id="lastname2" placeholder="Last name..." />
                    </div>
                    <div className="form-group col-xs-12">
                      <label htmlFor="street2" className="control-label">Street Address</label>
                      <input type="text" value='' className="form-control" id="street2" placeholder="Street address (no P.O.)..." />
                    </div>
                    <div className="form-group col-xs-4 col-md-4">
                        <label htmlFor="city2" className="control-label">City</label>
                        <input type="text" value='' className="form-control" id="city2" placeholder="City..." />
                    </div>
                    <div className="form-group col-xs-4 col-md-4">
                      <label htmlFor="state2" className="control-label">State</label>
                      <select type="text" value='state' className="form-control" id="state2">
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
                        <label htmlFor="zip2" className="control-label">Zip Code</label>
                        <input type="text" value='' className="form-control" id="zip2" placeholder="00000" />
                    </div>
                    <div className="form-group col-xs-6">
                        <label htmlFor="phone2" className="control-label">Primary Phone</label>
                        <input type="text" value='' className="form-control" id="phone2" placeholder="000-000-0000" />
                    </div>
                    <div className="form-group col-xs-6">
                        <label htmlFor="email2" className="control-label">Email</label>
                        <input type="email" value='' className="form-control" id="email2" placeholder="parent2@address.com" />
                    </div>
                </div>
              </ToggleDisplay>
            </div>
            <div className="row col-md-8">
              <button type="submit" className="btn btn-success">Register</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
});


module.exports = Signup;
