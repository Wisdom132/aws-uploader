const uploadController = require("./controller");
const router = require("express").Router();
const upload = require('../../config/aws')



//create upload instance


const singleUpload = upload.upload.single('image');

router.post("/", (req, res) => {
    try {
        singleUpload(req, res, err => {
            return res.status(200).json({
                imageURL: req.file.location
            })
        })
    } catch (err) {
        console.log(err)
    }

})




module.exports = router;