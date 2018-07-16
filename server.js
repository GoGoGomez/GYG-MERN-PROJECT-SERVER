// Third party modules
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
// const menu = require("./routes/api/menu");
require('dotenv').config()
const db = require("./config/database");
const Item = require('./models/item')


// DB Config
// const db = require('./config/database')

const app = express()

const port = process.env.PORT || 4000
// Body parse middlewasre
require('dotenv').config()

// Load end points
const menu = require('./routes/api/menu')
const users = require('./routes/api/users')

const app = express()

// Body parse middleware
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json

app.use(bodyParser.json())
app.use(cors())


// Use routes
app.use('/api/menu', menu)
app.use('/api/users', users)

// Database Config
const db = require('./config/database')

// Connecting to mongodb
mongoose
  .connect(db.mongoURI, { useNewUrlParser: true })
  .then(() => console.log('Connected to mongodb'))
  .catch(err => console.log(err))


const port = process.env.PORT || 5000
app.listen(port, () =>
console.log(`server running on port ${port}`, process.env.MONGOLAB_URI)
)

module.exports = {app}

// 'mongodb://localhost:27017/GyGApp'