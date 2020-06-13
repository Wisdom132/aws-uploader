const uploadRoute = require("../api/upload/routes")


module.exports = (app) => {
    app.use("/upload", uploadRoute);
}