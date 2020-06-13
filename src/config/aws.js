var aws = require('aws-sdk')

var multer = require('multer')
var multerS3 = require('multer-s3')



aws.config.update({
    secretAccessKey: process.env.ACEESS_SECRET,
    accessKeyId: process.env.ACCESS_KEY,
    region: 'eu-west-3'
})
var s3 = new aws.S3();
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb(new Error('Not an image! Please upload an image.', 400), false);
    }
};

exports.upload = multer({
    fileFilter,
    storage: multerS3({
        s3,
        bucket: 'instagram-app',
        acl: 'public-read',
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