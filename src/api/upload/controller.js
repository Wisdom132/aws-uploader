const {
    upload,
    s3
} = require('../../config/aws')

const singleUpload = upload.single('image');


exports.uploadImage = (req, res) => {
    try {
        singleUpload(req, res, err => {
            if (err) {
                return res.status(422).json({
                    title: "File Upload Error",
                    desription: err.message
                })
            }
            return res.status(200).json({
                imageURL: req.file.location
            })
        })
    } catch (err) {
        console.log(err)
    }
}