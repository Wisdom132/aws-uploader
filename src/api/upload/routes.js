const uploadController = require("./controller");
const router = require("express").Router();


router.post("/", uploadController.uploadImage)

router.get("/", uploadController.getBucketItems)



module.exports = router;