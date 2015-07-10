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


/**
 * Create Form Data Object
 * 
 * @param  {DOMObject} form 
 * @return {Object}      
 */
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