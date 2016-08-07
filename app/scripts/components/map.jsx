var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');


var models = require('../models/students');
var User = require('../models/students');
var Group = require('../models/groups');
var GroupCollection = require('../models/groups').GroupCollection;


var GroupMap = React.createClass({
    getDefaultProps: function () {
        return {
          // Location of Iron Yard for temp location
          initialZoom: 8,
          mapCenterLat: 34.852156,
          mapCenterLng: -82.399669,
        };
    },
    componentDidMount: function (rootNode) {
        var mapOptions = {
            center: this.mapCenterLatLng(),
            zoom: this.props.initialZoom
        },
        map = new google.maps.Map(this.getDOMNode(), mapOptions);
        var marker = new google.maps.Marker({position: this.mapCenterLatLng(), title: 'Hi', map: map});
        this.setState({map: map});
    },
    mapCenterLatLng: function () {
        var props = this.props;
        return new google.maps.LatLng(props.mapCenterLat, props.mapCenterLng);
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
              <div className="map-gic">
              </div>
              <div>
                <h5>Schedule Area</h5>
              </div>
            </div>
          </div>
        </div>
      )
    }
  });


	// React.renderComponent(
	//     <ExampleGoogleMap />,$('body')[0]
	// );
// var GroupMap = React.createClass({
//   getInitialState: function(){
//     return {
//       map: null,
//       marker: null,
//       infoWindow: null
//     }
//   },
//   componentDidMount: function(){
//     //  create the map, marker and infoWindow after the component has
//     //  been rendered because we need to manipulate the DOM for Google =(
//     // @map = @createMap(),
//     // @marker = @createMarker(),
//     // @infoWindow = @createInfoWindow()
//     createMap = this.map(),
//     createMarker = this.marker(),
//     createInfoWindow = this.infoWindow(),
//
//     //  have to define google maps event listeners here too
//     //  because we cant add listeners on the map until its created
//     google.maps.event.addListener createMap; zoomChanged: function({this.handleZoomChange()}),
//     google.maps.event.addListener createMap, dragend: function({this.handleDragEnd()}),
//   },
//   createMap: function(){}
//     coords = this.props.coords
//     mapOptions = {
//       minZoom: 9,
//       zoom: 10,
//       center: new google.maps.LatLng(this.props.coords.lat, this.props.coords.lon)
//     },
//     new google.maps.Map(@refs.map_canvas.getDOMNode(), mapOptions),
//   },
//   createMarker: function(){
//     var marker = new google.maps.Marker;
//       position: new google.maps.LatLng(this.props.coords.lat, this.props.coords.lon)
//       map: this.map
//   },
//   createInfoWindow: function(){
//     var contentString = "<div class='InfoWindow'>I'm a Window that contains Info Yay</div>";
//     var infoWindow = new google.maps.InfoWindow;
//       map: this.map,
//       anchor: this.marker,
//       content: contentString
//
//   handleZoomChange: function(){
//     var self = this,
//     //  something happens when the zoom changes
//     //  this is where its handled
//   },
//   handleDragEnd: function(){
//     var self = this,
//     //  something else happens when the map is dragged somewhere
//     //  this is where thats handled
//   },


module.exports = GroupMap;

// Google Map key >>  AIzaSyCTxwfw21PFbas9U69kH7ZhmmtvGWgjzJU
