const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Item = new Schema({
  category: {type: Number},
  imagePath: {type: String},
  title: {type: String},
  description: {type: String},
  options: {type: Object}, 
  price: {type: Number}
})

module.exports = mongoose.model('Item', Item)