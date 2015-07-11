/**
 * Input Upload Rendered
 */
Template.inputFileUpload.rendered = function() {
   
}



/**
 * Events
 * Create event for each template
 * 
 * @todo refactor for ease of use, unify template?
 */
Template.inputFileUpload.events({
  'change .input-file--s3': function(event) {
    event.preventDefault()

    // Select files
    var $input        = $('.input-file--s3'),
        $input_group  = $input.parent().parent().parent().parent('.form-group'),
        $file_table   = $input_group.find('.file-table'),
        $file_info    = $file_table.find('.file-table__info'),
        $file_actions = $file_table.find('.file-table__actions'),
        $input_help   = $input_group.find('.help-block'),
        files         = $input[0].files;

    var file   = files[0]


    var base64 = {}

    function readFileAsBase64(file, callback) {

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

    readFileAsBase64( file, function (data) {
      console.log( data )
    })



    // Show filename
    $file_info.find('.filename').html('\
      <i class="fa fa-file-image-o"></i> \
      <span>' + files[0].name + '</span> \
    ')


    // Set folder name as unique userId + sub name concat
    var folder = Meteor.userId + '-sub-logo';

    // sendFilesToS3( files, '', function (error, result) {

    //   console.log('sendToS3 Callback', error, result)

    //   // Error 
    //   if ( error ) {}
        
    // })

  }
})