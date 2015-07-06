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
 * Events
 *
 * @debug
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
  },
})

ProfileController.helpers({
  profileData: function() {
    return Meteor.user().profile;
  }
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

      console.log( form['bio'].value )

      var valid = updateUserProfile( data, function (userProfile) {
        console.log( 'updateUserProfile', userProfile )
      })
        
      if ( valid ) {

      }

    }
  })




}
