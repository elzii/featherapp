Stores = new Mongo.Collection('subs');

Stores.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title"
  },
  name: {
    type: String,
    label: "Name"
  },
  description: {
    type: String,
    label: "Store Description"
  },
  logo: {
    type: Object,
    optional: true,
    label: "Logo Image"
  },
  owner: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    autoValue: function () {
      if ( this.isInsert ) {
        return Meteor.userId()
      }
    },
  }
}));


if(Meteor.isServer)
{
  Meteor.publish('subsSubscription', function (args)
  { 
    return Subs.find()
  });
}