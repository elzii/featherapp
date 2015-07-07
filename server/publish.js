/**
 * Server
 */
if ( Meteor.isServer ) {
    
  /**
   * Roles
   * Publish Meteor.roles to every client without needing a subscription.
   */
  Meteor.publish(null, function (){ 
    return Meteor.roles.find({})
  })

  /**
   * Secrets
   * 
   * @param  {String} name
   */
  Meteor.publish('secrets', function (name) {
    if (Roles.userIsInRole(this.userId, 'admin')) {
      return Meteor.secrets.find({name: name});
    } else {
      // user not authorized. do not publish.
      this.stop();
      return;
    }
  })
}