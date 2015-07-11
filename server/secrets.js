
/**
 * Amazon S3
 *
 * @url https://s3-us-west-1.amazonaws.com/feather-uploads
 */
S3.config = {
  key: 'AKIAILWWXAEX43ZC2E6A',
  secret: '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',
  bucket: 'feather-uploads',
  region: 'us-west-1'
}


/**
 * Amazon S3 - Upload Usage
 * S3.upload({
 *   files: {},            // REQUIRED - a javascript FileList object
 *   path: '',             // DEFAULT  - format of 'folder/anotherFolder' - no start or trailing slashes
 *   unique_name: true,    // DEFAULT  - auto uuid filename
 *   encoding: 'base64',   // OPTIONAL - upload as base64 string
 *   expiration: 1800000,  // DEFAULT  - 30 mins
 *   uploader: 'default',  // DEFAULT  - defines name of uploader (for use with multiple uploaders)
 *   acl: 'public-read',   // DEFAULT  - 'private', 'public-read', 'public-read-write', 'authenticated-read', 'bucket-owner-read', 'bucket-owner-full-control', 'log-delivery-write'
 *   bucket: '',           // DEFAULT  - server settings (S3.config)
 *   region: '',           // DEFAULT  - server settings (S3.config)})
 * }, function (err, res) {
 *   console.log( err, res )
 * })
 */