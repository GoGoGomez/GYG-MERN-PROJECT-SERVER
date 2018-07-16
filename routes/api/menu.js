const express = require('express')
const router = express.Router()
const Item = require('../../models/item')


router.get('/', (req, res) => {
  Item.find().then(
    items => res.json(items)
  ).catch(
    error => res.status(500).json({
      error: error.message
    })
  )
})

module.exports = router