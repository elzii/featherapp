SubListController = AppController.extend({

  waitOn: function() {
    return Meteor.subscribe('subs')
  },

  // data: function() {
    
  // },

  onBeforeAction: function () {
    this.next()
  },

  onAfterAction: function () {
    Meta.setTitle('Sub List');
  }

})


/**
 * Helpers
 */
SubListController.helpers({
  subData : function() {
    return Subs.find({})
  }
})


/**
 * Clientside
 */
if ( Meteor.isClient ) {

 


}
