var aws = require('aws-sdk')

var multer = require('multer')
var multerS3 = require('multer-s3')



aws.config.update({
    secretAccessKey: process.env.ACEESS_SECRET,
    accessKeyId: process.env.ACCESS_KEY,
    region: 'eu-west-3'
})
var s3 = new aws.S3();

exports.upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'instagram-app',
        metadata: function (req, file, cb) {
            cb(null, {
                fieldName: "TESTING_META_DATA"
            });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString())
        }
    })
})