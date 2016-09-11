var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var ReactBsTable = require("react-bootstrap-table");
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

// var models = require('../models/students');
var StudentCollection = require('../models/students').StudentCollection;

// var data = [
//     {id: 'wuBgAL3t2t', studentName: 'Watt Ever', studentSchool: 'Beck Middle School', studentGrade: '7', studentGender: 'M'},
//     {id: 'lstUXuic5R', studentName: 'Jane Plane', studentSchool: 'Beck Middle School', studentGrade: '7', studentGender: 'F'},
//     {id: 'j1WzyzUVFF', studentName: 'Sally Mow', studentSchool: 'Beck Middle School', studentGrade: '7', studentGender: 'F'},
//     {id: 'J1BwScz6RD', studentName: 'Tye Neetim', studentSchool: 'Beck Middle School', studentGrade: '8', studentGender: 'M'},
//     {id: 'HJofdyZuqx', studentName: 'Wanda Full', studentSchool: 'Beck Middle School', studentGrade: '7', studentGender: 'F'},
//     {id: 'Maew8w3yPo', studentName: 'Ben Dumm', studentSchool: 'Beck Middle School', studentGrade: '6', studentGender: 'M'},
//     {id: 'mD7voOHuU3', studentName: 'Tom Mee', studentSchool: 'Beck Middle School', studentGrade: '8', studentGender: 'M'},
//     {id: 'b1gPcplMmn', studentName: 'Deb Utawnt', studentSchool: 'Beck Middle School', studentGrade: '7', studentGender: 'F'},
//     {id: 'uORB8oAVYV', studentName: 'Jack Spratt', studentSchool: 'Beck Middle School', studentGrade: '6', studentGender: 'M'},
//     {id: 'LGgC6Fg4Fr', studentName: 'Joe Kerr', studentSchool: 'Beck Middle School', studentGrade: '6', studentGender: 'M'},
//     {id: 'PMYpqtvUBU', studentName: 'Robin DeRitch', studentSchool: 'Beck Middle School', studentGrade: '7', studentGender: 'F'},
//     {id: 'wF87V3FSip', studentName: 'Sally Mander', studentSchool: 'Beck Middle School', studentGrade: '8', studentGender: 'F'},
//     {id: 'NuwxJ5ImRX', studentName: 'Frank Lee', studentSchool: 'Beck Middle School', studentGrade: '7', studentGender: 'M'},
// ];

var GroupPop = React.createClass({
  groupShare: function() {
    window.open('', 'sharer', 'toolbar=0,status=0,width=640,height=480');
  },
  render: function(){
    return (
      <div>
        <button id="submitButton" type="submit" className="btn btn-success btn-sm pull-right" onClick={this.groupShare}>Create Group</button>
      </div>
    );
  }
});

var onRowSelect;
var onSelectAll;
var selectRowProp = {
    mode: "checkbox",
    clickToSelect: true,
    bgColor: "#FFC469",
    onSelect: onRowSelect,
    onSelectAll: onSelectAll
  };


var GroupSetup = React.createClass({
  getInitialState: function(){
    return {
      studentList: new StudentCollection,
    };
  },
  componentWillMount: function(){
    var self = this;
    this.state.studentList.fetch().done(function(){
      self.forceUpdate();
    });
  },
  onRowSelect: function(row, isSelected){
      console.log(row);
      console.log("selected: " + isSelected)
  },
  onSelectAll: function(isSelected){
      console.log("is select all: " + isSelected);
  },
  onSubmit: function(){
    e.preventDefault();
    var router = this.props.router;
  },
  render: function(){
    var chooseStudent = this.state.studentList;
    var eachStudent = chooseStudent.map(function(student, index){
      return (
        <tr key={index}>
          <td align="center">
              <input type="checkbox" className="case" name="case" value={index} />
          </td>
          <td>{student.get('student')}</td>
          <td>{student.get('school')}</td>
          <td>{student.get('grade')}</td>
          <td>{student.get('gender')}</td>
        </tr>
      )
    })
    return (
      <div>
        <div className="col-xs-offset-1 col-xs-10 col-md-offset-3 col-md-6">
          <div className="icon-third">
            <a href="#"><img src="images/PoolParty_purplelog.png"></img></a>
          </div>
          <div><h1 id="page-title">Welcome, David!</h1></div>
          <div className="sect-sep">
            <p>Now that you’re a Pool Party member, let’s start with creating a Group. The Students you’ll see listed below live within a 2-mile radius of your home. This makes it convenient for both them and you to join together.</p>
          </div>
          <div className="row">
            <div>
              <div className="subtitle"><h2><img src="./images/group.png" className="panel-art"/>Create A Group!</h2></div>
              <div className="panel-body">
                <p>Select from the eligible students shown to form your potential car pool group. Do not select more than 4 potential students; Groups cannot consist of more than 5 members. Students with the name crossed through have already joined a group.</p>
                <p>Once you’ve selected your group, name the group below. Then click the Create button. An email will be sent to each student’s parent(s) informing them of your wish to have them join your car pool. You will be notified once they have confirmed their participation.</p>
              </div>
              <div>
                <table border="1">
                  <thead>
                    <tr>
                      <th>Select</th>
                      <th>Student</th>
                      <th>School</th>
                      <th>Grade Level</th>
                      <th>Gender</th>
                    </tr>
                  </thead>
                  <tbody>{eachStudent}</tbody>
                </table>
              </div>
            </div>
            <div>
              <GroupPop />
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = {
  'GroupSetup': GroupSetup,
  // 'GroupSelect': GroupSelect
};

// var GroupSelect = React.createClass({
//   getInitialState: function(){
//     return {
//       router
//     };
//   },
//   componentWillMount: function(){
//     var self = this;
//   },
//   render: function(){
//     return (
//       <div>
//         <h2>Here’s you Group!</h2>
//         <div>
//           <p>Now that you’ve set up your Group, be sure to confirm the students you selected and give your Group a name. If you wish to change your selection, click on the Edit button below.</p>
//         </div>
//       </div>
//     )
//   }
// });

// <div>
//   <BootstrapTable className="table" id="table" data={data} height="280" selectRow={selectRowProp} striped={true} hover={true} condensed={true}>
//     <TableHeaderColumn dataField="studentName" isKey={true} dataSort={true} className="td-header-group">Students Eligible</TableHeaderColumn>
//     <TableHeaderColumn dataField="studentSchool" dataAlign="center" className="td-header-group">School</TableHeaderColumn>
//     <TableHeaderColumn dataField="studentGrade" dataAlign="center" className="td-header-group">Grade Level</TableHeaderColumn>
//     <TableHeaderColumn dataField="studentGender" dataAlign="center" className="td-header-group">Gender</TableHeaderColumn>
//   </BootstrapTable>
// </div>
