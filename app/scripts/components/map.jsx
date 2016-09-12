var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');

var Group = require('../models/groups').Group;
var GroupCollection = require('../models/groups').GroupCollection;
var MessageCollection = require('../models/messages').MessageCollection;


var NavTitle = React.createClass({
  handleSignOut: function(){
    localStorage.clear();
  },
  render: function(){
    var user = JSON.parse(localStorage.getItem('user'));
    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="pull-right">
            <div className="row active-user">
              <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
              <h5>{user.username}</h5>
              <div className="active-btn btn btn-sm btn-link" onClick={this.handleSignOut}>
                <a href="#" className="sign-out">Sign Out</a>
              </div>
            </div>
          </div>
          <div>
            <div className="icon-third"><a href="#"><img src="images/PoolParty_purplelog.png"></img></a></div>
          </div>
        </div>
      </div>
    )
  }
});

var MapSchedule = React.createClass({
  getInitialState: function(){
    return {
      // ourGroup: new Group(),
    };
  },
  componenntDidMount: function(){
    // var ourGroup = this.state.ourGroup;
    // console.log(ourGroup);
    // this.state.ourGroup.fetch().done(function(){
    //   self.forceUpdate();
    // });
    // console.log('ourGroup');
  },
  render: function(){
    var user = JSON.parse(localStorage.getItem('user'));
    return (
      <div>
        <div className="col-xs-offset-1 col-xs-10 col-md-offset-3 col-md-6">
          <div>
            <NavTitle />
          </div>
          <div>
            <h1 id="page-title">Hi, {user.firstname1}!</h1>
          </div>
          <div className="sect-sep">
            <p>This is copy that welcomes Primary/Secondary parent’s name and the Student’s name. Information concerning the Student’s school & class level, their parent’s name, home address and email. The lower level will contain the current month’s schedule as well as a request board for schedule changes.</p>
          </div>
          <div className="row">
            <div className="col-md-10">
              <div className="subtitle"><h2><img src="./images/our-group.png" className="panel-art"/> Our Group</h2></div>
              <div className="well table-responsive">
                <table border="1" className="table">
                  <thead>
                    <tr>
                      <th>Group Information:</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{}</td>
                      <td>{}</td>
                      <td>{}</td>
                      <td>{}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>

            </div>
          </div>
          <div className="sect-sep"></div>
          <div className="row">
            <div className="col-md-6">
              <div className="subtitle"><h2><img src="./images/schedule-cal.png" className="panel-art"/> Schedule Area</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="subtitle"><h2><img src="./images/chat.png" className="panel-art"/> Let's Chat..</h2>
              </div>
              <div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

var CreateMessage = React.createClass({
  getInitialState: function(){
    return {
      'username': '',
      'message': '',
      'createdAt': ''
    }
  },

  handleSubmit: function(e){
    e.preventDefault();
    this.props.handleNewMessage(this.state.message);
    this.setState({'message': ''});
  },

  handleMessageChange: function(e){
    e.preventDefault();
    this.setState({'message': e.target.value});
  },

  render: function(){
    var user = JSON.parse(localStorage.getItem('user'));
    return(
      <form onSubmit={this.handleSubmit} id="message-form">
        <div className="form-group">
            <label htmlFor="message">Message</label>
            <input
              value={this.state.message}
              onChange={this.handleMessageChange}
              className="form-control"
              id="message"
              placeholder="Message"
              rows="2" />
            <button type="submit" className="btn btn-default">Submit Message</button>
            <a className="btn btn-default" href="#" role="schedules/">Return Home</a>
        </div>
      </form>
    );
  }
});

var MessagesDisplay = React.createClass({
  render: function(){
    var messages = this.props.messages;
    var messagesList = messages.map(function(data) {
      return (
        <li key={data.get('_id')}>
          Name: {data.get('username')};
          Msg: {data.get('message')};
          '': {data.get('createdAt')}
        </li>
      );
    })
    return(
      <ul className="well">
          {messagesList}
      </ul>
    );
  }
});

var MessageBoard = React.createClass({
  getInitialState: function(){
    return {
      messages: new MessageCollection()
    }
  },
  componentWillMount: function(){
    var self = this;

    var messagesCollection = new collection.MessageCollection();
    messagesCollection.fetch().done(function(data){
      self.setState({messages: messagesCollection});
    });

    messagesCollection.on('add', this.update)

    this.intervalId = setInterval(function(){
      messagesCollection.fetch()
    }, 30000)
  },

  componentWillUnmount: function(){
    clearInterval(this.intervalId)
  },

  update: function(){
    this.forceUpdate()
  },

  handleNewMessage: function(message){
    this.state.messages.create({
      'username': JSON.parse(localStorage.getItem('user')),
      'message': message,
      'createdAt': moment().format("0000")
    }, {wait: true});
  },

  render: function(){
    var username = JSON.parse(localStorage.getItem('user'));
    return(
      <div className="row">
        <div className="col-md-6 col-md-offset-1">
          <h3>Let's chat, {user.firstname1}!</h3>
          <MessagesDisplay messages={this.state.messages}/>
          <CreateMessage handleNewMessage={this.handleNewMessage} />
        </div>
      </div>
    );
  }
});

module.exports = {
  'MapSchedule': MapSchedule,
  'MessageBoard': MessageBoard,
};
// Google Map key >>  AIzaSyCTxwfw21PFbas9U69kH7ZhmmtvGWgjzJU
