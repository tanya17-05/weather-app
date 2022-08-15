const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cors = require('cors')
app.use(cors())

dotenv.config({path:"./config.env"})

app.use(bodyParser.json())

const port = process.env.PORT || 1000;

const { test } = require('./controller')

app.post("/api", test);

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
