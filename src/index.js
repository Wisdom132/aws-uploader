require('dotenv').config();
const express = require('express');
const PORT = 3000 || process.env.PORT;
const app = express();

const aws = require('./config/aws')

require('./api/routeHandler')(app)

app.get('/', (req, res) => res.status(200).json({
    msg: "Server Running"
}));



app.use((req, res) => {
    res.notFound();
});

app.use((err, req, res, next) => {
    logger.error(err.stack);
    next(err);
});

app.use((err, req, res, next) => {
    res.status(503).json({
        success: false,
        error: "server_error",
    });
})

app.listen(PORT, () => console.log("Server Running"))