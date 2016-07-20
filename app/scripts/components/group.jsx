var React = require('react');

var models = require('../models/students');
var StudentCollection = require('../models/students').StudentCollection;


var RecipeList = React.createClass({
  getInitialState: function(){
    return {
      studentCollection: []
    };
  },
  componentWillMount: function(){
    var self = this;
    var studentCollection = new models.StudentCollection();
    studentCollection.fetch().done(function(){
      self.setState({studentCollection: studentCollection})
    });
  },
  generateHeaders: function() {
    var cols = this.props.cols;  // [{key, label}]

    // generate our header (th) cell components
    return cols.map(function(colData) {
        return <th key={colData.key}> {colData.label} </th>;
    });
  },
  generateRows: function() {
      var cols = this.props.cols,  // [{key, label}]
          data = this.props.data;

      return data.map(function(item) {
          // handle the column data within each row
          var cells = cols.map(function(colData) {

              // colData.key might be "firstName"
              return <td> {item[colData.key]} </td>;
          });
          return <tr key={item.id}> {cells} </tr>;
      });
  },
  render: function(){
    return (
      <div>
        <table>
          <thead> {headerComponents} </thead>
          <tbody> {rowComponents} </tbody>
        </table>
      </div>
    )
  }
});

React.render(<Table cols={cols} data={data}/>,
document.getElementById('container'));
