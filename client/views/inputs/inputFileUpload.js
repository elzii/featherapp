/**
 * Input Upload Rendered
 */
Template.inputFileUpload.rendered = function() {
   
}


Template.inputFileUpload.helpers({
  'fileList': function(event) {
    return S3.collection.find()
  }
})

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
        $input_url    = $('.input-file--s3-url'),
        $input_group  = $input.parent().parent().parent().parent('.form-group'),
        $file_table   = $input_group.find('.file-table'),
        $file_info    = $file_table.find('.file-table__info'),
        $file_actions = $file_table.find('.file-table__actions'),
        $input_help   = $input_group.find('.help-block'),
        files         = $input[0].files;

    // Set global flag
    window.FILE_LIST_ACTIVE = true;

    // Set URL value in hidden input for form submit

    // readFileAsBase64( files[0], function (data) {
    //   console.log( data )
    // })

    // Show filename
    $file_info.find('.filename').html('\
      <i class="fa fa-file-image-o"></i> \
      <span>' + files[0].name + '</span> \
    ')

    // Set folder name as unique userId + sub name concat
    // var folder = Meteor.userId() + '-sub-logo';


    // sendFilesToS3( files, '', function (error, result) {
    //   console.log('sendToS3 Callback', error, result)
    // })

    S3.upload({ files : files, path : 'sub-logos' }, function (err, res) {
      console.log('sendToS3 Callback', err, res)

      $input_url.val( res.url )
    })

  }
})