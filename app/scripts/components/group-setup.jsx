var React = require('react');
var ReactDOM = require('react-dom');

// var models = require('../models/students');
// var StudentCollection = require('../models/students').StudentCollection;


var cols = [
    { key: 'studentName', label: 'Student' },
    { key: 'studentSchool', label: 'School' },
    { key: 'studentGrade', label: 'Grade Level' },
    { key: 'studentGender', label: 'Gender' }
];

var data = [
    { id: 4021, studentName: 'Watt Ever', studentSchool: 'Beck Middle School', studentGrade: '7', studentGender: 'M' },
    { id: 4022, studentName: 'Jane Plane', studentSchool: 'Beck Middle School', studentGrade: '7', studentGender: 'F' },
    { id: 4023, studentName: 'Sally Mow', studentSchool: 'Beck Middle School', studentGrade: '7', studentGender: 'F' },
    { id: 4024, studentName: 'Tye Neetim', studentSchool: 'Beck Middle School', studentGrade: '8', studentGender: 'M' },
    { id: 4025, studentName: 'Wanda Full', studentSchool: 'Beck Middle School', studentGrade: '7', studentGender: 'F' },
    { id: 4026, studentName: 'Ben Dumm', studentSchool: 'Beck Middle School', studentGrade: '6', studentGender: 'M' },
    { id: 4027, studentName: 'Tom Mee', studentSchool: 'Beck Middle School', studentGrade: '8', studentGender: 'M' },
    { id: 4028, studentName: 'Deb Utawnt', studentSchool: 'Beck Middle School', studentGrade: '7', studentGender: 'F' },
    { id: 4029, studentName: 'Jack Spratt', studentSchool: 'Beck Middle School', studentGrade: '7', studentGender: 'M' },
    { id: 4030, studentName: 'Joe Kerr', studentSchool: 'Beck Middle School', studentGrade: '6', studentGender: 'M' },
    { id: 4031, studentName: 'Robin DeRitch', studentSchool: 'Beck Middle School', studentGrade: '7', studentGender: 'F' },
    { id: 4032, studentName: 'Sally Mander', studentSchool: 'Beck Middle School', studentGrade: '8', studentGender: 'F' },
    { id: 4033, studentName: 'Frank Lee', studentSchool: 'Beck Middle School', studentGrade: '7', studentGender: 'M' },
];


var GroupSetup = React.createClass({
  // getInitialState: function(){
  //   return {
  //     studentCollection: []
  //   };
  // },
  // componentWillMount: function(){
  //   var self = this;
  //   var studentCollection = new models.StudentCollection();
  //   studentCollection.fetch().done(function(){
  //     self.setState({studentCollection: studentCollection})
  //   });
  // },
  generateHeaders: function() {
    var cols = this.props.cols;

    return cols.map(function(colData) {
        return <th key={colData.key}> {colData.label} </th>;
    });
  },
  generateRows: function() {
      var cols = this.props.cols;
      var data = this.props.data;

      return data.map(function(item) {
        var cells = cols.map(function(colData) {
          return <td> {item[colData.key]} </td>;
          });
          return <tr key={item.id}> {cells} </tr>;
      });
  },
  render: function(){
    var headerComponents = this.generateHeaders();
    var rowComponents = this.generateRows();

    return (
      <div>
        <h1>WHAT'S WRONG?!</h1>
        // <table>
        //   <thead> {headerComponents} </thead>
        //   <tbody> {rowComponents} </tbody>
        // </table>
      </div>
    )
  }
});

module.exports = {
  'GroupSetup': GroupSetup
}
