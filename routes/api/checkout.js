const express = require('express')
const router = express.Router()

// Checkout validations
const validateCheckoutInput = require('../../validation/checkout')


router.post('/', (req, res) => {
  const { errors, isValid } = validateCheckoutInput(req.body)
  // console.log(errors)

  // // Check Validation
  if (!isValid) {
    return res.status(400).json(errors)
  }

  // then send email if all input passes
})

module.exports = router