const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Item = new Schema({
  category: String,
  imagePath: String,
  title: String,
  description: String,
  filling: {
    type: Boolean, 
    default: true
  },
  heat: {
    type: Boolean, 
    default: true
  },
  size: {
    type: Boolean, 
    default: true
  },
  price: Number
})

module.exports = mongoose.model('Item', Item)