const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
require('dotenv').config()
const menu = require('./routes/api/menu')
const Item = require('./models/item')


const app = express()
const port = process.env.PORT || 3000

// Middleware
app.use(bodyParser.json())
app.use('/api/menu', menu)

// app.get('/', (req, res) => {
//   res.send(`<h1>Hello working</h1>`)
// })

mongoose.connect(process.env.MONGOLAB_URI, (err) => {
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