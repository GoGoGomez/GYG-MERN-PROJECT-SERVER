const express = require('express')
const router = express.Router()

// Load in Item module
const Item = require('../../models/Item')


// @route GET     /api/menu
// @description   send menu items
// @access        public
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