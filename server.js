const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const cors = require('cors')
// require('dotenv').config()
const menu = require('./routes/api/menu')

const app = express()

const port = process.env.PORT || 3000
// Body parse middlewasre
app.use(bodyParser.json())
app.use(cors())

// Load api end points
app.use('/api/menu', menu)

// DB Config
const db = require('./config/database')

mongoose.connect(process.env.MONGOLAB_URI, { useNewUrlParser: true }, (err) => {
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