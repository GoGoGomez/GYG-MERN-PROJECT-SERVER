const express = require('express')
const router = express.Router()

// Load User Model
const User = require('../../models/User')

router.get('/register', (req, res) => {
  res.send('Registering user....')
})


module.exports = router

