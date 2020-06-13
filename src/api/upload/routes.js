const uploadController = require("./controller");
const router = require("express").Router();


router.post("/", uploadController.uploadImage)




module.exports = router;