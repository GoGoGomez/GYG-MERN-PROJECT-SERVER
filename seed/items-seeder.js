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
    imagePath: 'https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg',
    title: 'Drinks',
    description: 'Grilled Chicken in GYG’s Guerrero marinade with Pico de Gallo and Roasted Tomato salsa.'
  }), 
  new Item ({
    imagePath: 'https://res.cloudinary.com/dxzy39s8n/image/upload/v1531621772/burrito.jpg',
    title: 'Burritos',
    description: 'Rice, jack cheese, vegetarian black beans, salsa and filling, rolled in a soft flour tortilla',
    price: 11.70,
    filling: true,
    heat: true,
    size: true,
  }),
  new Item({
    imagePath: 'https://res.cloudinary.com/dxzy39s8n/image/upload/v1531959419/enchiladas.jpg',
    title: 'Enchiladas',
    description: 'Your favourite burrito topped with salsas, melted jack cheese, crema, guacamole and corn chips.',
    price: 15.00,
    filling: true,
    heat: true,
    size: true,
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
