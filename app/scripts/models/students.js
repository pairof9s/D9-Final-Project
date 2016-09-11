var Backbone = require('backbone');

var Student = Backbone.Model.extend({
  idAttribute: 'objectId',
  urlRoot: "https://d9-dev-server.herokuapp.com/classes/Poolers",
});

var StudentCollection = Backbone.Collection.extend({
  model: Student,
  url: "https://d9-dev-server.herokuapp.com/classes/Poolers",
  parse: function(serverResponse){
    return serverResponse.results;
  }
});

module.exports = {
  'Student': Student,
  'StudentCollection': StudentCollection
};
