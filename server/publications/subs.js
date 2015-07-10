Meteor.publishComposite('subs', function() {
  return {
    find: function() {
      return Subs.find({})
    }
  }
})