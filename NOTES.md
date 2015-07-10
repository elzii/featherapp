// Publication Attempts on User data

Meteor.publish(null, function() {
  return Meteor.users.find( {_id: this.userId }, {
    fields: {username: 1}
  })
})

Meteor.publish("userDataSubscription", function () {
  return Meteor.users.find( { _id: this.userId }, {
    fields: {
      'username': true
    }
  })
})


// Permissions and Allow - Old method (working but insecure)

Subs.allow({
  update: function (userId, doc, fieldNames, modifier) {
    // User and document checks, return true to allow update
    return true; 
  },
  insert: function(userID, doc) {
    // User and document checks, return true to allow insert
    return true;
  }
})



// Old insert without collection2

var sub_id = Subs.insert({
  name: data.name, 
  title: data.title, 
  description: data.description
})



subs.js old footer


// if ( Meteor.isServer ) {

  // Meteor.publish('subsSubscription', function () { 
  //   return Subs.find({})
  // })

  // Meteor.publish('allSubsData', function () {
  //   return Subs.find({}, {
  //     fields: {
  //       'name': 1,
  //       'title' : 1,
  //       'description' : 1,
  //       'owner' : 1,
  //     }
  //   })
  // })

  

  // Posts.deny({
  //   update: function (userId, docs, fields, modifier) {
  //     // can't change owners
  //     return _.contains(fields, 'owner')
  //   },
  //   remove: function (userId, doc) {
  //     // can't remove locked documents
  //     return doc.locked;
  //   },
  //   fetch: ['locked'] // no need to fetch 'owner'
  // })

// }

// if ( Meteor.isClient ) {
//   Meteor.subscribe('subsSubscriptions')
// }





// FAILED SUB LOOKUP ATTEMPTS ON CLIENT

// console.log( 'Subs.find()', Subs.find() )
// console.log( 'Subs.find({})', Subs.find({}) )

// var subs = Subs.find()
// console.log( 'subs', subs )

// var subs = Subs.find({}, {fields: {'name':1}})
// var subs = Subs.findOne({}, {fields: {'name':1}})
// console.log( 'Subs.findOne', Subs.findOne({ name : 'news'} ))
// console.log( 'Subs.find', Subs.find({ _id : '38Pu9n8S7kqSuRf9R'} ))
// console.log( 'Sub exists? ', Subs.find({'news': {$exists : true }}))