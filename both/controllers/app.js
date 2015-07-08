AppController = RouteController.extend({

  layoutTemplate: 'appLayout',
  notFoundTemplate: 'notfound',
  loadingTemplate: 'loading',

  onBeforeAction: function() {
    
    this.next()
  }
})

/**
 * Events
 */
AppController.events({
  'click [data-action=logout]' : function() {
    AccountsTemplates.logout();
  },
  'click [data-debug-event]': function (event, template) {
    event.preventDefault()
    debugEvent(event, template, this)
  },
})


/**
 * Tracker Autoruns
 * http://docs.meteor.com/#/full/tracker_autorun
 * http://stackoverflow.com/questions/13151879/publish-certain-information-for-meteor-users-and-more-information-for-meteor-use
 */
Tracker.autorun(function () {
  
})