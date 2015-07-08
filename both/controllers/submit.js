SubmitController = AppController.extend({

  waitOn: function() {
    
  },

  data: {
    
  },

  onBeforeAction: function() {
    this.next()
  },

  onAfterAction: function () {
    Meta.setTitle('Submit')
  }

})


/**
 * Events
 */
SubmitController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault()
  }
})


if ( Meteor.isClient ) {

}