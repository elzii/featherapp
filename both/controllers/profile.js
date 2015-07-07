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

    if ( Meteor.user().profile ) {
      return Meteor.user().profile;  
    } else {
      // Set some default data to creat the profile field
      // @BUG better way to do this?
      updateUser({
        // 'profile' : {}
        'profile.gender' : 'Female'
      }, function() {
        return Meteor.user().profile;
      })
    }
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

    // Add user to roles
    Meteor.call('addUsersToRoles', Meteor.user(), ['admin', 'moderator'], function (err) {
      if ( err ) console.log('Error: ', err)
    })

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
