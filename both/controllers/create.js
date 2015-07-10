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
      
      // Manual method - element loop function replaces for now
      // var data = {
      //   'name' : form['name'].value,
      //   'title' : form['title'].value,
      //   'description' : form['description'].value,
      // }

      var data = createFormDataObject( form )

      console.log( 'data', data )

      var sub = Subs.findOne({ name : data.name })

      console.log( sub )

      if ( sub ) {
        console.log('Sub already exists', sub)
      } else {
        Subs.insert({
          name: data.name, 
          title: data.title, 
          description: data.description,
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

  /**
   * Validate Form
   * 
   * @param  {DOM Object} form        
   * @param  {Array} invalidKeys 
   * @return {Boolean}
   */
  validateForm = function(form, invalidKeys) {

    var $form = $(form)

    // Clear all error classes
    $form.find('.form-group').removeClass('has-error')

    if ( invalidKeys && invalidKeys.length > 0 ) {

      // Loop invalid keys
      $.each( invalidKeys, function (i, field) {

        var $field       = $form.find('[name="'+field.name+'"]'),
            $field_group = $field.parent('.form-group')
        
        $field_group.addClass('has-error')

      })
      return false;
    } else {
      return true;
    }
  }


  createFormDataObject = function(form) {

    var elements = form.elements,
        data     = {}

    for ( var i=0; i < form.elements.length; i++ ) {

      // Skip non-data (submit) fields
      if ( elements[i].type !== 'submit' ) {
        data[elements[i].name] = elements[i].value;
      }
    }

    return data;
  }


}
