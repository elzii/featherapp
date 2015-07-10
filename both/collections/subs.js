Subs = new Mongo.Collection('subs');


var Schema = {};
// Subs.attachSchema(new SimpleSchema({
Schema.Subs = new SimpleSchema({
  title: {
    type: String,
    label: "Title"
  },
  name: {
    type: String,
    label: "Name",
    unique: true
  },
  description: {
    type: String,
    label: "Store Description"
  },
  public_description: {
    type: String,
    label: "Store Description",
    optional: true
  },
  submit_text: {
    type: String,
    label: "Submit Text",
    optional: true
  },
  submit_text_label: {
    type: String,
    label: "Submit Button Label",
    optional: true,
  },
  logo_url: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    label: "Logo Image URL",
    optional: true
  },
  subscribers : {
    type: Number,
    min: 0,
    optional: true
  },
  user_is_subscriber : {
    type: Boolean,
    optional : true
  },
  created: {
    type: Date,
    autoValue: function() {
      if ( this.isInsert ) {
        return new Date;
      } 
      else if ( this.isUpsert ) {
        return {$setOnInsert: new Date}
      } 
      else {
        this.unset()
      }
    },
    label: "Created At"
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
})

// Subs.before.insert(function (userId, doc) {
//   doc.createdAt = moment().toDate()
// })


Subs.attachSchema(Schema.Subs)


if ( Meteor.isServer ) {
  
  // Meteor.publish('allSubData', function () {
  //   return Subs.find({}, {
  //     fields: {
  //       'name': 1,
  //       'title' : 1
  //     }
  //   })
  // })

}

if ( Meteor.isClient ) {
  Meteor.subscribe('allSubData')
}