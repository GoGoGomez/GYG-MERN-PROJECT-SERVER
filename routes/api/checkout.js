const express = require('express')
const router = express.Router()

// Checkout validations
const validateCheckoutInput = require('../../validation/checkout')

// Post route
router.post('/', (req, res) => {
  const body = req.body
  const { errors, isValid } = validateCheckoutInput(body)
  // console.log(errors)

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors)
  }

  // send email
  const api_key = 'e5dbc981cb2e54c89e6d1f9c3c31b9ed-8889127d-26be80dd';
  const domain = 'sandboxa147aef1091642389d49f9ef0e9c7f6e.mailgun.org';
  const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
  
  if (!body.company) body.company = 'Company name not provied'

  const sendEmail = (body, isGuzman) => {
    let data
    
    if (isGuzman) {
      let media = ''
      data = {
        from: `Customer Order <${body.email}>`,
        to: `${process.env.denis_email}`,
        subject: 'I would like my orders please',
        html: require('../../email_transaction/email_receiver')(body, media)
      }
    } else {
      let media = `Follow <a href="https://twitter.com/guzmanygomez?lang=en" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; color: #999; text-decoration: underline; margin: 0;">@guzmanygomez</a> on Twitter.`
      data = {
        from: `Guzman y Gomez <${process.env.denis_email}>`,
        to: `${body.email}`,
        subject: 'Confirming your orders',
        html: require('../../email_transaction/email_receiver')(body, media)
      }
    }
 
    mailgun.messages().send(data, (error, body) => {
      if (error) res.status(400).json(error)
    })
  }

  // Send customer order to  Alex (resaurant owner)
  sendEmail(body, true)

  // Send order confirmation to customer
  sendEmail(body, false)
  
  res.send({msg: 'email sent'})
})

module.exports = router

