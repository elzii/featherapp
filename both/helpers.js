/**
 * Methods
 */
Meteor.methods(


)


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
  updateUserProfile = function(data, callback) {

    // Update the current user
    var updatedUser = Meteor.users.update( 
      { _id: Meteor.userId() },
      { 
        $set: data
      }
    )

    if (callback) callback( Meteor.user().profile )

    return updatedUser;
  }

}