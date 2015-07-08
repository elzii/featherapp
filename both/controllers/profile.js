ProfileController = AppController.extend({

  waitOn: function() {
    // return Meteor.users.findOne({ _id: this.userId })
    // return Meteor.subscribe('userDataSubscription')
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
  userData: function() {

    // var user = Meteor.user()

    // if ( user && user['profile'] ) {
    //   return user['profile']
    // } else {
    //   // Set some default data to creat the profile field
    //   // @BUG better way to do this?
    //   updateUser({
    //     // 'profile' : {}
    //     'profile.gender' : 'Male'
    //   }, function (userObj) {
    //     return userObj['profile']
    //   })
    // }

    return Meteor.user();
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
        'username' : form['username'].value,
        'profile.firstName' : form['profile.firstName'].value,
        'profile.lastName' : form['profile.lastName'].value,
        'profile.gender' : form['profile.gender'].value,
        'profile.organization' : form['profile.organization'].value,
        'profile.website' : form['profile.website'].value,
        'profile.bio' : form['profile.bio'].value
      }

      var valid = updateUser( data, function (userProfile) {
        console.log( 'updateUser', userProfile )
      })
        
      if ( valid ) {

      }

    }
  })




}
