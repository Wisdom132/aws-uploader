const express = require('express');

const PORT = 3000 || process.env.PORT;


const app = express();



app.get('/', (req, res) => res.status(200).json({
  msg: "Server Running"
}));


app.listen(PORT, () => console.log("Server Running"))