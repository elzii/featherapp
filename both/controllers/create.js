CreateSubController = AppController.extend({

  waitOn: function() {
    return Meteor.subscribe('subs')
  },

  // data: function() {
    
  // },

  onBeforeAction: function () {
    this.next()
  },

  onAfterAction: function () {
    Meta.setTitle('Create Sub');
  }

})


/**
 * Helpers
 */
CreateSubController.helpers({
  subData : function() {
    return Subs.find({})
  }
})


/**
 * Clientside
 */
if ( Meteor.isClient ) {

  // console.log( 'Subs.find()', Subs.find() )

  /**
   * Form Events
   * @ref https://github.com/aldeed/meteor-collection2
   */
  Template.formCreateSub.events({
    'submit form': function(event, template) {      
      event.preventDefault()

      var debug = false,
          form  = event.target;

      var data = createFormDataObject( form )

      if ( debug ) console.log( 'data', data )

      var sub = Subs.findOne({ name : data.name })

      if ( sub ) {
        if ( debug ) console.log('Sub already exists', sub)
        Alerts.set('A subreddit with that name already exists.', 'danger')

      } else {
        Subs.insert({
          name: data.name, 
          title: data.title, 
          description: data.description,
          logo_url: data.file_url,
          owner: Meteor.userId()
        }, function (error, result) {
          //The insert will fail, error will be set, and result will be undefined or false because "copies" is required.
          
          if ( debug ) console.log( 'error', error )
          if ( debug ) console.log( 'result', result )

          if ( error && error.invalidKeys) {
            console.log( 'invalidKeys', error.invalidKeys )
            // Validate form
            validateForm( form, error.invalidKeys )
          }

        })
      }

    }
  })



}
