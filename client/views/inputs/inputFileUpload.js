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
        $input_group  = $input.parent().parent('.form-group'),
        $input_help   = $input_group.find('.help-block'),
        $input_info   = $input_group.find('.input-info'),
        files         = $input[0].files;

    // Set folder name as unique userId + sub name concat
    var folder = Meteor.userId + '-sub-logo';

    console.log( 'FileList: ', files )

    // Show filename
    console.log( $input_info, files[0].name )
    $input_info.html( files[0].name )

    // sendFilesToS3( files, '', function (error, result) {

    //   console.log('sendToS3 Callback', error, result)

    //   // Error 
    //   if ( error ) {}
        
    // })

  }
})