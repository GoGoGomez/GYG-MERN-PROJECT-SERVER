const express = require('express')
const router = express.Router()

// Checkout validations
const validateCheckoutInput = require('../../validation/checkout')

// Post route
router.post('/', (req, res) => {
  const body = req.body
  const { errors, isValid } = validateCheckoutInput(body)
  // console.log(errors)
  

  // // Check Validation
  if (!isValid) {
    return res.status(400).json(errors)
  }

  // send email
  const api_key = 'e5dbc981cb2e54c89e6d1f9c3c31b9ed-8889127d-26be80dd';
  const domain = 'sandboxa147aef1091642389d49f9ef0e9c7f6e.mailgun.org';
  const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
  
  if (!body.company) body.company = 'Company name not provied'
   
  const data = {
    from: `Guzman y Gomez <${process.env.denis_email}>`,
    to: `${process.env.denis_email}`,
    subject: 'Third email',
    html: `
      <p><strong>Name</strong>: ${body.firstName} ${body.lastName}</p>
      <p><strong>Phone number</strong>: ${body.phoneNumber}</p>
      <p><strong>Email</strong>: ${body.email}</p>
      <p><strong>Address</strong>: ${body.street} ${body.city}, ${body.postcode}</p>
      <p><strong>Company</strong>: ${body.company}</p>
      <hr />
      <p><strong>Orders</strong>: Blank for now</p>
    `
  };
   
  mailgun.messages().send(data, (error, body) => {
    if (error) console.log(error)
    console.log(body);
  });

  res.send({msg: 'email sent'})
})
module.exports = router