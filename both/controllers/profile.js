ProfileController = AppController.extend({

  waitOn: function() {
    // return this.subscribe('user');
  },

  // data: {
    
  // },

  onBeforeAction: function () {
    this.next()
  },

  onAfterAction: function () {
    Meta.setTitle('Profile');
  }

})


/**
 * Events
 */
ProfileController.events({
  'click button#update-user': function (event, template) {
    event.preventDefault()

    console.log( 'event, template:', event, template )

    updateUserProfile({
      'profile.gender' : 'Male'
    }, function (user_profile) {
      console.log( 'callback', user_profile )
    })
  }
})

/**
 * Clientside
 */
if ( Meteor.isClient ) {

  Template.formUserProfile.helpers({
    formData: function() {
      return Meteor.user().profile;
    }
  })

  console.log( Meteor.user().profile )

}
