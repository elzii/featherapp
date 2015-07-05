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
  }
})
