const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer');

// Checkout validations
const validateCheckoutInput = require('../../validation/checkout')

const sendEmail = (data) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${process.env.gmail_user}`,
      pass: `${process.env.gmail_password}`
    }
  });

  transporter.sendMail(data, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

const getData = (body, isGuzman) => {
  console.log(body)
  if (isGuzman) {
    // Send this owner
    let media = ''
    return {
      from: `Customer Order <${process.env.gmail_user}>`,
      // USE ALEX EMAIL
      to: `${process.env.ian}`,
      subject: 'I would like my orders please',
      html: require('../../email_transaction/email_receiver')(body, media)
    };
  } else {
    // Send this to customer
    let media = `Follow <a href="https://twitter.com/guzmanygomez?lang=en" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; color: #999; text-decoration: underline; margin: 0;">@guzmanygomez</a> on Twitter.`
    return {
      from: `Guzman y Gomez <${process.env.gmail_user}>`,
      to: `${body.email}`,
      subject: 'Sending Email using Node.js',
      html: require('../../email_transaction/email_receiver')(body, media)
    };
  }
}

// Post route
router.post('/', (req, res) => {
  const body = req.body
  const {
    errors,
    isValid
  } = validateCheckoutInput(body)

  console.log(body)
  
  // // Check Validation
  if (!isValid) {
    return res.status(400).json(errors)
  }

  if(!body.company) body.company = 'Company not provided'

  // Send customer order to  Alex (resaurant owner)
  sendEmail(getData(body, true))

  // Send order confirmation to customer
  sendEmail(getData(body, false))
})

module.exports = router