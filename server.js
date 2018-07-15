const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send(`<h1>Hello working</h1>`)
})

app.listen(port, () =>
  console.log(`server running on port ${port}`)
)