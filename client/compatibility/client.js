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


/**
 * Validate File Type
 * 
 * @param  {String} type 
 * @return {Boolean}      
 */
validateFileType = function(type) {
  if ( type.match(/(\.|\/)(gif|jpe?g|png)$/i) ) {
    return true;
  } else {
    return false;
  }
}


/**
 * Send To Amazon S3
 * Wrapper function for S3 package method
 * 
 * @param  {Object}   files    
 * @param  {String}   folder   
 * @param  {Function} callback 
 */
sendFilesToS3 = function(files, folder, callback) {
  S3.upload({
    files: files,
    path: folder
  }, function (error, result) {
    callback( error, result )
  })
}

/**
 * Format base4 String to RAW
 * Removes the 'base64,' prefix
 * 
 * @param  {String} string 
 * @return {String}
 */
formatBase64StringToRAW = function(string) {
  return string.substring(img.base64.indexOf(",") + 1);
}