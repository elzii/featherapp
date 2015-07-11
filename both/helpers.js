/**
 * Methods - Roles
 * --------------------------------------------------------------------
 * @ref https://gentlenode.com/journal/meteor-13-managing-user-roles/24
 * @ref https://github.com/alanning/meteor-roles/
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
    var user = Meteor.user()
    return user.emails[0].address
  })

  /**
   * Current User ID
   */
  Template.registerHelper('currentUserID', function () {
    var user = Meteor.user()
    return user._id
  })

  /**
   * Current User Roles
   */
  Template.registerHelper('currentUserRoles', function () {
    var user = Meteor.user()
    roles = Roles.getRolesForUser(user)
    return roles
  })

  /**
   * Current User Role List
   */
  Template.registerHelper('currentUserRoleList', function () {
    var user = Meteor.user()
    roles = Roles.getRolesForUser(user)
    
    console.log( 'typeof roles', typeof roles, roles )
    if ( roles.indexOf(',') > -1 ) {
      return roles.split(',')
    }
  })

  /**
   * Render Template With Options
   * @incomplete 
   */
  Template.registerHelper('renderTemplateWithOptions', function (template, options) {
    
    var options = options || {}

    return new Template[template]
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
      })
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