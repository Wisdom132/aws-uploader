const uploadController = require("./controller");
const router = require("express").Router();
const upload = require('../../config/aws')



//create upload instance


const singleUpload = upload.upload.single('image');

router.post("/upload", (req, res) => {
    singleUpload(req, res, (err) => {
        return res.status(200).json({
            imageURL: req.file.location
        })
    })
})




module.exports = router;