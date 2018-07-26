
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Item = new Schema({
  category: String,
  imagePath: String,
  title: String,
  description: String,
  filling: {
    type: Boolean,
    default: false
  },
  heat: {
    type: Boolean,
    default: false
  },
  size: {
    type: Boolean,
    default: false
  },
  price: Number,
  miniPrice: Number,
  modifications: Array,
  extras: Array,
  options: Array
})

module.exports = mongoose.model('Item', Item)
