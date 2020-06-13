require('dotenv').config();
const express = require('express');
const PORT = 3000 || process.env.PORT;
const bodyParser = require("body-parser");
const morgan = require('morgan')
const path = require('path');
var cors = require("cors");




const app = express();


app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(cors());


const aws = require('./config/aws')

require('./api/routeHandler')(app)
app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname + '/template/index.html')))



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