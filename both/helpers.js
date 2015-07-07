/**
 * Methods - Roles
 * --------------------------------------------------------------------
 * @ref https://gentlenode.com/journal/meteor-13-managing-user-roles/24
 * 
 * Get Roles
 * @example
 *  roles = Roles.getAllRoles();
 *  roles = Roles.getRolesForUser(user);
 *  users = Roles.getUsersInRole('admin');
 *
 * Remove User from Role
 * @example
 *  Roles.removeUsersFromRoles(users, 'admin')
 *  
 * Manage Roles
 * @example
 *  Roles.createRole('admin');
 *  Roles.deleteRole('admin');
 *
 * Template Helpers
 * @example
 *  {#if isInRole 'admin' 'growth hacker'}}
 *    {{> admin_nav}}  
 *  {{/if}}
 */
Meteor.methods({

  /**
   * Add User To Roles
   * 
   * @param {Object} users 
   * @param {Array} roles 
   * @param {String} group 
   */
  addUsersToRoles: function(user, roles, group) {
    
    var user  = user || Meteor.user()

    if ( !group ) {
      return Roles.addUsersToRoles(user, roles)
    } else {
      return Roles.addUsersToRoles(user, roles, group)
    }

  },


})


/**
 * Clientside
 */
if ( Meteor.isClient ) {

  /**
   * Current User Email
   */
  Template.registerHelper('currentUserEmail', function () {
    var loggedInUser = Meteor.user()
    return loggedInUser.emails[0].address
  })

  /**
   * Current User ID
   */
  Template.registerHelper('currentUserID', function () {
    var loggedInUser = Meteor.user()
    return loggedInUser._id
  })


  /**
   * Upsert Wrapper
   *
   * @param {Object} collection 
   * @param {Object} selector 
   * @param {String} id 
   * @param {Object} data 
   * 
   * @example
   *
   *  var settings = Stores.findOne({ collection_id : collection_id });
   *  
   *  _upsert( Settings, { collection_id : 'zx938sd9s' }, settings._id, {
        collection_id : collection_id,
        someKey : 'someValue',
      })
   */
  _upsert = function(collection, selector, id, data) {
    if (collection.findOne(selector) != null) {
      collection.update( id, {
        $set: data
      });
    } else {
      collection.insert( data )
    }
  }




  /**
   * Update User Profile
   * 
   * @param  {Object}   data     
   * @param  {Function} callback 
   * @return {Boolean}
   */
  updateUser = function(data, callback) {

    // Update the current user
    var updatedUser = Meteor.users.update( 
      { _id: Meteor.userId() },
      { 
        $set: data
      }
    )

    if (callback) callback( Meteor.user() )

    return updatedUser;
  }

}