const mongoose = require ('mongoose')
let Item = require('../models/item')
require('dotenv').config()

mongoose.connect(process.env.MONGOLAB_URI, {
    useNewUrlParser: true
  }).then(connection => {
    console.log('Connected to MongoDB')
  })
  .catch(error => {
    console.log(error.message)
  })

let items = [
    new Item ({
    category: 40,
    imagePath: 'https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg',
    title: 'Drinks',
    description: 'Grilled Chicken in GYG’s Guerrero marinade with Pico de Gallo and Roasted Tomato salsa.',
    options: [{
      name: 'Jarritos Guava (Bottle)',
      price: 4.70
    },
    {
      name: 'Jarritos Lime (Bottle)',
      price: 4.70
    }]
  })
]

let done = 0
for (let i = 0; i < items.length; i++){
  items[i].save((err, result) => {
    done ++
    if (done === items.length){
      exit()
    }
  })
}

let exit = () => {
  mongoose.disconnect()
}
