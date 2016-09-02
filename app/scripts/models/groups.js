var Backbone = require('backbone');


var Group = Backbone.Model.extend({
  idAttribute: "objectId",
});


var GroupCollection = Backbone.Collection.extend({
  model: Group
});

module.exports = {
  'Group': Group,
  'GroupCollection': GroupCollection
}
