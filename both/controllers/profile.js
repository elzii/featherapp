ProfileController = AppController.extend({

  waitOn: function() {
    return Meteor.users.findOne({ _id: this.userId })
  },

  // data: {

  // },

  // onBeforeAction: function () {
  //   this.next()
  // },

  onAfterAction: function () {
    Meta.setTitle('Profile');
  }

})

/**
 * Helpers
 */
ProfileController.helpers({
  // Profile Form Data
  profileData: function() {
    return Meteor.user().profile;
  },
  // Debug
  debugMode: function() {
    return true;
  }
})

/**
 * Events
 *
 * @debug
 */
ProfileController.events({
  'click #update-user-debug': function (event, template) {
    event.preventDefault()

    // Meteor.call('addUsersToRoles', Meteor.user(), ['admin'], function (res, err, data) {
    //   console.log('callback', res, err, data)
    // })

  },
})


/**
 * Clientside
 */
if ( Meteor.isClient ) {

  /**
   * Form Data
   */

  /**
   * Form Events
   * @todo error handling, try putting comma in organization
   */
  Template.formUserProfile.events({
    'submit form': function(event, template) {      
      event.preventDefault()

      var form = event.target

      var data = {
        'profile.firstName' : form['firstName'].value,
        'profile.lastName' : form['lastName'].value,
        'profile.gender' : form['gender'].value,
        'profile.organization' : form['organization'].value,
        'profile.website' : form['website'].value,
        'profile.bio' : form['bio'].value
      }

      var valid = updateUser( data, function (userProfile) {
        console.log( 'updateUser', userProfile )
      })
        
      if ( valid ) {

      }

    }
  })




}
