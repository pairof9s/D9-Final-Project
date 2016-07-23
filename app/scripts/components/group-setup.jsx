var React = require('react');
var ReactDOM = require('react-dom');

// var models = require('../models/students');
var StudentCollection = require('../models/students').StudentCollection;


var cols = [
    { type: 'studentName', label: 'Eligible Students' },
    { type: 'studentSchool', label: 'School' },
    { type: 'studentGrade', label: 'Grade Level' },
    { type: 'studentGender', label: 'Gender' },
    { type: 'selectStudent', label: 'Select'}
];

var data = [
    { id: 4021, studentName: 'Watt Ever', studentSchool: 'Beck Middle School', studentGrade: '7', studentGender: 'M', selectStudent: <input type="checkbox"/> },
    { id: 4022, studentName: 'Jane Plane', studentSchool: 'Beck Middle School', studentGrade: '7', studentGender: 'F', selectStudent: <input type="checkbox"/> },
    { id: 4023, studentName: 'Sally Mow', studentSchool: 'Beck Middle School', studentGrade: '7', studentGender: 'F', selectStudent: <input type="checkbox"/> },
    { id: 4024, studentName: 'Tye Neetim', studentSchool: 'Beck Middle School', studentGrade: '8', studentGender: 'M', selectStudent: <input type="checkbox"/> },
    { id: 4025, studentName: 'Wanda Full', studentSchool: 'Beck Middle School', studentGrade: '7', studentGender: 'F', selectStudent: <input type="checkbox"/> },
    { id: 4026, studentName: 'Ben Dumm', studentSchool: 'Beck Middle School', studentGrade: '6', studentGender: 'M', selectStudent: <input type="checkbox"/> },
    { id: 4027, studentName: 'Tom Mee', studentSchool: 'Beck Middle School', studentGrade: '8', studentGender: 'M', selectStudent: <input type="checkbox"/> },
    { id: 4028, studentName: 'Deb Utawnt', studentSchool: 'Beck Middle School', studentGrade: '7', studentGender: 'F', selectStudent: <input type="checkbox"/> },
    { id: 4029, studentName: 'Jack Spratt', studentSchool: 'Beck Middle School', studentGrade: '7', studentGender: 'M', selectStudent: <input type="checkbox"/> },
    { id: 4030, studentName: 'Joe Kerr', studentSchool: 'Beck Middle School', studentGrade: '6', studentGender: 'M', selectStudent: <input type="checkbox"/> },
    { id: 4031, studentName: 'Robin DeRitch', studentSchool: 'Beck Middle School', studentGrade: '7', studentGender: 'F', selectStudent: <input type="checkbox"/> },
    { id: 4032, studentName: 'Sally Mander', studentSchool: 'Beck Middle School', studentGrade: '8', studentGender: 'F', selectStudent: <input type="checkbox"/> },
    { id: 4033, studentName: 'Frank Lee', studentSchool: 'Beck Middle School', studentGrade: '7', studentGender: 'M', selectStudent: <input type="checkbox"/> },
];

var GroupSetup = React.createClass({
  getInitialState: function(){
    return {
      studentCollection: [],
    };
  },
  componentWillMount: function(){
    // var cols = this.state.cols;
    console.log(cols);
  },
  generateHeaders: function() {
    return cols.map(function(colData) {
        return <th key={colData.type}>{colData.label}</th>;
    });
  },
  generateRows: function() {

      return data.map(function(item) {
        var cells = cols.map(function(colData) {
          return <td>{item[colData.type]}</td>;
        });
        return <tr key={item.id}>{cells}</tr>;
      });
  },
  render: function(){
    var headerComponents = this.generateHeaders();
    var rowComponents = this.generateRows();

    return (
      <div className="col-md-10 group-table">
        <div className="icon-third"><img src="images/PoolParty_logo.png"></img></div>
        <div><h1>Welcome, David!</h1></div>
        <div>
          <p>This is copy that welcomes Primary/Secondary parent's name and the Student's name. Information concerning the Student's school & class level, their parent’s name, home address and email. The lower level will contain the current month’s schedule as well as a request board for schedule changes.</p>
        </div>
        <div className="row col-md-8">
          <div className="panel panel-success">
            <div className="panel-heading"><h4>Create A Group!</h4></div>
              <div className="panel-body">
                <p>Select from the eligible students shown to form your potential car pool group. Do not select more than 4 potential students; Groups cannot consist of more than 5 members. Students with the name crossed through have already joined a group.</p>
                <p>Once you’ve selected your group, name the group below. Then click the Create button. An email will be sent to each student’s parent(s) informing them of your wish to have them join your car pool. You will be notified once they have confirmed their participation.</p>
              </div>
            <table className="table table-condensed table-striped table-hover">
              <thead>
                <tr>{headerComponents}</tr>
              </thead>
              <tbody>
                {rowComponents}
              </tbody>
            </table>
          </div>
          <div><button type="submit" className="btn btn-success btn-sm pull-right">Create Group</button></div>
        </div>
        <div>

        </div>
      </div>
    )
  }
});



module.exports = {
  'GroupSetup': GroupSetup
}
