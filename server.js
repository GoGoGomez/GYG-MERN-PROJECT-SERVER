// Third party modules
const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
require('dotenv').config()

// Load end points
const menu = require('./routes/api/menu')

const app = express()

// Body parse middlewasre
app.use(bodyParser.json())

// Use routes
app.use('/api/menu', menu)

// Database Config
const db = require('./config/database')

// Connecting to mongodb
mongoose
  .connect(db.mongoURI, { useNewUrlParser: true })
  .then(() => console.log('Connected to mongodb'))
  .catch(err => console.log(err))


const port = process.env.PORT || 3000
app.listen(port, () =>
console.log(`server running on port ${port}`)
)

module.exports = {app};

// 'mongodb://localhost:27017/GyGApp'