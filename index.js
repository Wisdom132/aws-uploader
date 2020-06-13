require('dotenv').config();
var aws = require('aws-sdk')
const express = require('express');
var multer = require('multer')
var multerS3 = require('multer-s3')
const PORT = 3000 || process.env.PORT;
const app = express();





var s3 = new aws.S3({ /* ... */ })

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'some-bucket',
    metadata: function(req, file, cb) {
      cb(null, {
        fieldName: file.fieldname
      });
    },
    key: function(req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})
app.get('/', (req, res) => res.status(200).json({
  msg: "Server Running"
}));


app.listen(PORT, () => console.log("Server Running"))