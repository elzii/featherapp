PublicProfileController = AppController.extend({

  waitOn: function() {
    return Meteor.subscribe('allUserData')
  },

  // data: {

  // },

  onBeforeAction: function () {
    this.next()
  },

  onAfterAction: function () {
    Meta.setTitle('Public Profile');
  }

})


/**
 * Helpers
 */
PublicProfileController.helpers({

  userData: function() {
    // return Meteor.user()
  },
  
})

/**
 * Events
 *
 */
PublicProfileController.events({
  'click .classname': function (event, template) {
    event.preventDefault()
  },
})


/**
 * Clientside
 */
if ( Meteor.isClient ) {

}