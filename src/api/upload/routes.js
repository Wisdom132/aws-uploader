const uploadController = require("./controller");
const router = require("express").Router();



//create upload instance



router.post("/", uploadController.uploadImage)




module.exports = router;