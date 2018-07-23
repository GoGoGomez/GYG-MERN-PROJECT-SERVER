const express = require('express')
const router = express.Router()

// Checkout validations
const validateCheckoutInput = require('../../validation/checkout')

router.post('/', (req, res) => {
  const body = req.body
  const { errors, isValid } = validateCheckoutInput(body)
  // console.log(errors)

  // // Check Validation
  if (!isValid) {
    return res.status(400).json(errors)
  }

  // send email
  
  const api_key = process.env.mail_gun_api
  const domain =process.env. mail_gun_domain
  const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain})

  if (!body.company) body.company = 'Company name not provied'
  
  const data = {
    from: `Guzman y Gomez <${process.env.denis_email}>`,
    to: `${process.env.denis_email}`,
    subject: 'testing123',
    html: `
      <p><strong>Name</strong>: ${body.firstName} ${body.lastName}</p>
      <p><strong>Phone number</strong>: ${body.phoneNumber}</p>
      <p><strong>Email</strong>: ${body.email}</p>
      <p><strong>Address</strong>: ${body.street} ${body.city}, ${body.postcode}</p>
      <p><strong>Orders</strong>: Blank for now</p>
    `
  };
  
  mailgun.messages().send(data, function (error, body) {
    if (error) console.log(error)
    console.log(body)
    res.redirect('/menu');
  })
})

module.exports = router