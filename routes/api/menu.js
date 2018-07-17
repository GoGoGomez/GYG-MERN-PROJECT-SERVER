const express = require('express')
const router = express.Router()

// Load in Item module
const Item = require('../../models/item')


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

// @route GET     /api/menu/:id
// @description   get individual items
// @access        public
router.get('/:id', (req, res) => {
  Item.find({ _id: req.params.id }).then(
    items => res.json(items)
  ).catch(
    error => res.status(500).json({
      error: error.message
    })
  )
})

module.exports = router