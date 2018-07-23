const mongoose = require("mongoose");
let Item = require("../models/item");
require("dotenv").config();

mongoose
  .connect(
    process.env.MONGOLAB_URI,
    {
      useNewUrlParser: true
    }
  )
  .then(connection => {
    console.log("Connected to MongoDB");
  })
  .catch(error => {
    console.log(error.message);
  });

let items = [
  new Item({
    imagePath:
      "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531621772/burrito.jpg",
    title: "Burritos",
    description:
      "Rice, jack cheese, vegetarian black beans, salsa and filling, rolled in a soft flour tortilla",
    price: 11.7,
    filling: true,
    heat: true,
    size: true
  }),
  new Item({
    imagePath:
      "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531959419/enchiladas.jpg",
    title: "Enchiladas",
    description:
      "Your favourite burrito topped with salsas, melted jack cheese, crema, guacamole and corn chips.",
    price: 15.0,
    filling: true,
    heat: true,
    size: true
  }),
  new Item({
    imagePath:
      "https://res.cloudinary.com/dxzy39s8n/image/upload/v1532311323/Cali_Burrito.jpg",
    title: "Cali Burrito",
    description: "The Cali Burrito",
    price: 13.0,
    filling: true,
    heat: true,
    size: true
  }),
  new Item({
    imagePath:
      "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531622052/fajitas.jpg",
    title: "Fajitas",
    description:
      "Your favourite burrito with sautéed capsicums, onions and mushrooms, fajita vinaigrette and crema. Rolled in a soft flour tortilla.",
    price: 13.0,
    filling: true,
    heat: true,
    size: true
  }),
  new Item({
    imagePath:
      "https://res.cloudinary.com/dxzy39s8n/image/upload/v1532311284/burrito-bowls.jpg",
    title: "BURRITO BOWLS",
    description:
      "Rice, jack cheese, vegetarian black beans, salsa and filling, served in a bowl",
    price: 11.7,
    filling: true,
    heat: true,
    size: true
  }),
  new Item({
    imagePath:
      "https://res.cloudinary.com/dxzy39s8n/image/upload/v1532311275/fajita-bowls.jpg",
    title: "FAJITA BOWLS",
    description:
      "Your favourite burrito with sautéed capsicums, onions and mushrooms, fajita vinaigrette and crema served in a bowl.",
    price: 13.0,
    filling: true,
    heat: true,
    size: true
  }),
  new Item({
    imagePath:
      "https://res.cloudinary.com/dxzy39s8n/image/upload/v1532311263/Soft-tacos.jpg",
    title: "TACOS",
    description:
      "Mexican street style with salsa, filling and a lime wedge, in a corn tortilla.",
    price: 5.0,
    filling: true
  }),
  new Item({
    imagePath:
      "https://res.cloudinary.com/dxzy39s8n/image/upload/v1532311245/quesadillas.jpg",
    title: "QUESADILLAS",
    description:
      "Grilled soft corn tortillas, melted jack cheese, salsa and filling.",
    price: 4.5,
    filling: true
  }),
  new Item({
    imagePath:
      "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg",
    title: "Drinks",
    description:
      "Grilled Chicken in GYG’s Guerrero marinade with Pico de Gallo and Roasted Tomato salsa."
  })
];

let done = 0;
for (let i = 0; i < items.length; i++) {
  items[i].save((err, result) => {
    done++;
    if (done === items.length) {
      exit();
    }
  });
}

let exit = () => {
  mongoose.disconnect();
};
