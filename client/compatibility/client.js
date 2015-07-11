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
  return string.substring(string.indexOf(",") + 1);
}

/**
 * Deselect File from Input
 * @param  {Object} input - jQuery 
 * @return {Boolean} 
 */
deselectFileFromInput = function(input) {
  if ( input instanceof jQuery ) {
    console.log('its a jquery obj!')
  } else {
    console.log('its a regular obj')
  }
}

/**
 * Read File as base64
 * Does not support a FileList, pass a single file from the array
 * 
 * @param  {Object}   file     
 * @param  {Function} callback 
 */
readFileAsBase64 = function(file, callback) {

  var reader = new FileReader()

  // Read file as data url
  reader.readAsDataURL( file )

  reader.onloadend = function(e, file) {
    var base64 = {
      formatted : this.result,
      raw       : formatBase64StringToRAW( this.result )
    }
    if ( callback ) callback(base64)
  }

}


/**
 * UInt8 To String
 * 
 * @param  {Array} buffer 
 * @return {String} output
 * 
 * @usage     var base64 = btoa(uint8ToString(yourUint8Array))
 * @download  window.open("data:application/octet-stream;base64," + base64)
 */
uint8ToString = function(buffer) {
  var i, length, out = '';

  for ( i = 0, length = buffer.length; i < length; i += 1 ) {
    out += String.fromCharCode( buffer[i] )
  }
  return out
}