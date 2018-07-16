const express = require('express')
const bcrypt = require('bcryptjs')
// const Joi = require('joi')

const router = express.Router()

// Load User Model
const User = require('../../models/User')

// Load input validation
// const validateRegisterInput = require('../../validation/register')
const validateLoginInput = require('../../validation/login')

// @route GET     /api/users/login
// @description   login in page 
// @access        public
router.get('/login', (req, res) => {
  res.send('Login page')
})

// @route GET     /api/users/register
// @description   register users
// @access        public
router.post('/register', (req, res) => {
  // const { errors, isValid } = validateLoginInput(req.body)

  // Check Validation
  // if (!isValid) {
  //   return res.status(400).json(errors)
  // }

  // check if user already exists
  User.findOne( {email: req.body.email} )
    .then(user => {
      if (user) {
        errors.email = 'Email already exists'
        res.send(errors)
      }
    })
    .catch(err => console.log(err))

    // create new user
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    
    // Hash password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err
        newUser.password = hash
        newUser.save()
          .then(user => res.json(user))
          .catch(err => console.log(err))
      })
    })
})


module.exports = router

