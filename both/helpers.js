Meteor.methods(


)


if ( Meteor.isClient ) {

  /**
   * Current User Email
   */
  Template.registerHelper('currentUserEmail', function () {

    var loggedInUser = Meteor.user()

    return loggedInUser.emails[0].address

  })

}