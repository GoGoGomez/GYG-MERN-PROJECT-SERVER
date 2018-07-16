const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const cors = require('cors')
const menu = require("./routes/api/menu");
require('dotenv').config()
const db = require("./config/database");

// DB Config
// const db = require('./config/database')
const app = express()

const port = process.env.PORT || 3000
// Body parse middlewasre
app.use(bodyParser.json())
app.use(cors())

// Load api end points
app.use('/api/menu', menu)

app.get('/', (req, res) => {
  res.send('<h1>test</h1>')
})

mongoose.Promise = global.Promise;

mongoose.connect(db.mongoURI, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log('Error connecting to database', err);
  } else {
    console.log('Connected to database!');
  }
});



app.listen(port, () =>
console.log(`server running on port ${port}`)
)

module.exports = {app};

// 'mongodb://localhost:27017/GyGApp'