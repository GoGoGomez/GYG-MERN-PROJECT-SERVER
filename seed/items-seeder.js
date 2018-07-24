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
    size: true,
    modifications: [
      {
        name: "Add Guacamole",
        price: 2
      },
      { name: "Use Brown Rice", price: 1 },
      { name: "Use Whole Wheat Tortilla", price: 0.5 },
      { name: "Add Queso", price: 2 },
      { name: "Add Sour Cream", price: 0.5 },
      { name: "Add Fresh Jalapeños", price: 0.5 },
      { name: "Add Pickled Jalapeños" },
      { name: "Add Chopped Onions" },
      { name: "Add Coriander" },
      { name: "Add Roasted Jalapeño Salsa (Mild)" },
      { name: "Add Smoky Chipotle Salsa (Spicy)" },
      { name: "Add Habanero Salsa (Extra Spicy)" },
      { name: "No Cheese" },
      { name: "No Salsa" },
      { name: "No Pico De Gallo" },
      { name: "No Rice" },
      {
        name: "No Beans"
      }
    ]
  }),
  new Item({
    imagePath:
      "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531959419/enchiladas.jpg",
    title: "Enchiladas",
    description:
      "Your favourite burrito topped with salsas, melted jack cheese, sour cream, guacamole and corn chips.",
    price: 15.0,
    filling: true,
    heat: true,
    size: true,
    modifications: [
      { name: "Use Brown Rice", price: 1 },
      { name: "Use Whole Wheat Tortilla", price: 0.5 },
      { name: "Add Queso", price: 2 },
      { name: "Extra Sour Cream", price: 0.5 },
      { name: "Add Fresh Jalapeños", price: 0.5 },
      { name: "Add Pickled Jalapeños" },
      { name: "Add Chopped Onions" },
      { name: "Add Coriander" },
      { name: "Add Roasted Jalapeño Salsa (Mild)" },
      { name: "Add Smoky Chipotle Salsa (Spicy)" },
      { name: "Add Habanero Salsa (Extra Spicy)" },
      { name: "No Guacamole" },
      { name: "No Sour Cream" },
      { name: "No Cheese" },
      { name: "No Salsa" },
      { name: "No Pico De Gallo" },
      { name: "No Rice" },
      { name: "No Beans" },
      { name: "No Corn Chips" }
    ]
  }),
  new Item({
    imagePath:
      "https://res.cloudinary.com/dxzy39s8n/image/upload/v1532311323/Cali_Burrito.jpg",
    title: "Cali Burritos",
    description: "The Cali Burrito",
    price: 13.0,
    filling: true,
    heat: true,
    size: true,
    modifications: [
      { name: "Add Brown Rice", price: 1 },
      { name: "Add White Rice", price: 1 },
      { name: "Use Whole Wheat Tortilla", price: 0.5 },
      { name: "Add Queso", price: 2 },
      { name: "Extra Sour Cream", price: 0.5 },
      { name: "Add Fresh Jalapeños", price: 0.5 },
      { name: "Add Pickled Jalapeños" },
      { name: "Add Chopped Onions" },
      { name: "Add Coriander" },
      { name: "Add Roasted Jalapeño Salsa (Mild)" },
      { name: "Add Smoky Chipotle Salsa (Spicy)" },
      { name: "Add Habanero Salsa (Extra Spicy)" },
      { name: "No Guacamole" },
      { name: "No Sour Cream" },
      { name: "No Cheese" },
      { name: "No Salsa" },
      { name: "No Pico De Gallo" },
      { name: "No Beans" },
      { name: "No Chipotle Salt" }
    ]
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
    size: true,
    modifications: [
      { name: "Add Guacamole", price: 2 },
      { name: "Use Brown Rice", price: 1 },
      { name: "Use Whole Wheat Tortilla", price: 0.5 },
      { name: "Add Queso", price: 2 },
      { name: "Add Extra Sour Cream", price: 0.5 },
      { name: "Add Fresh Jalapeños", price: 0.5 },
      { name: "Add Pickled Jalapeños" },
      { name: "Add Chopped Onions" },
      { name: "Add Coriander" },
      { name: "Add Roasted Jalapeño Salsa (Mild)" },
      { name: "Add Smoky Chipotle Salsa (Spicy)" },
      { name: "Add Habanero Salsa (Extra Spicy)" },
      { name: "No Cheese" },
      { name: "No Sour Cream" },
      { name: "No Fajita Vinaigrette" },
      { name: "No Pico De Gallo" },
      { name: "No Rice" },
      { name: "No Beans" },
      { name: "No Corn" },
      { name: "No Onion" },
      { name: "No Mushroom" },
      { name: "No Capsicum" }
    ]
  }),
  new Item({
    imagePath:
      "https://res.cloudinary.com/dxzy39s8n/image/upload/v1532311284/burrito-bowls.jpg",
    title: "Burrito Bowls",
    description:
      "Rice, jack cheese, vegetarian black beans, salsa and filling, served in a bowl",
    price: 11.7,
    filling: true,
    heat: true,
    size: true,
    modifications: [
      { name: "Add Guacamole", price: 2 },
      { name: "Use Brown Rice", price: 1 },
      { name: "Use Whole Wheat Tortilla", price: 0.5 },
      { name: "Add Queso", price: 2 },
      { name: "Add Sour Cream $0.50", price: 0.5 },
      { name: "Add Fresh Jalapeños", price: 0.5 },
      { name: "Add Pickled Jalapeños" },
      { name: "Add Chopped Onions" },
      { name: "Add Coriander" },
      { name: "Add Roasted Jalapeño Salsa (Mild)" },
      { name: "Add Smoky Chipotle Salsa (Spicy)" },
      { name: "Add Habanero Salsa (Extra Spicy)" },
      { name: "No Cheese" },
      { name: "No Salsa" },
      { name: "No Pico De Gallo" },
      { name: "No Rice" },
      { name: "No Beans" },
      { name: "No Corn Chips" }
    ]
  }),
  new Item({
    imagePath:
      "https://res.cloudinary.com/dxzy39s8n/image/upload/v1532311275/fajita-bowls.jpg",
    title: "Fajita Bowls",
    description:
      "Your favourite burrito with sautéed capsicums, onions and mushrooms, fajita vinaigrette and crema served in a bowl.",
    price: 13.0,
    filling: true,
    heat: true,
    size: true,
    modifications: [
      { name: "Add Guacamole", price: 2 },
      { name: "Use Brown Rice", price: 1 },
      { name: "Use Whole Wheat Tortilla", price: 0.5 },
      { name: "Add Queso", price: 2 },
      { name: "Add Extra Sour Cream", price: 0.5 },
      { name: "Add Fresh Jalapeños", price: 0.5 },
      { name: "Add Pickled Jalapeños" },
      { name: "Add Chopped Onions" },
      { name: "Add Coriander" },
      { name: "Add Roasted Jalapeño Salsa (Mild)" },
      { name: "Add Smoky Chipotle Salsa (Spicy)" },
      { name: "Add Habanero Salsa (Extra Spicy)" },
      { name: "No Cheese" },
      { name: "No Sour Cream" },
      { name: "No Fajita Vinaigrette" },
      { name: "No Pico De Gallo" },
      { name: "No Rice" },
      { name: "No Beans" },
      { name: "No Corn" },
      { name: "No Onion" },
      { name: "No Mushroom" },
      { name: "No Capsicum" },
      { name: "No Corn Chips" }
    ]
  }),
  new Item({
    imagePath:
      "https://res.cloudinary.com/dxzy39s8n/image/upload/v1532311263/Soft-tacos.jpg",
    title: "Tacos",
    description:
      "Mexican street style with salsa, filling and a lime wedge, in a corn tortilla.",
    price: 5.0,
    filling: true,
    modifications: [
      { name: "Add Cheese", price: 0.5 },
      { name: "Add Fresh Jalapenos", price: 0.5 },
      { name: "Add Habanero" },
      { name: "No Pico De Gallo" },
      { name: "No Salsa" }
    ],
    extras: [
      { name: "Side of Guacamole", price: 2 },
      { name: "Side of Sour Cream", price: 0.5 }
    ]
  }),
  new Item({
    imagePath:
      "https://res.cloudinary.com/dxzy39s8n/image/upload/v1532311245/quesadillas.jpg",
    title: "Quesadillas",
    description:
      "Grilled soft corn tortillas, melted jack cheese, salsa and filling.",
    price: 4.5,
    filling: true,
    modifications: [
      { name: "Add Fresh Jalapenos", price: 0.5 },
      { name: "Add Habanero" },
      { name: "No Cheese" },
      { name: "No Pico De Gallo" }
    ],
    extras: [
      { name: "Side of Guacamole", price: 2 },
      { name: "Side of Sour Cream", price: 0.5 }
    ]
  }),
  new Item({
    imagePath:
      "https://res.cloudinary.com/dxzy39s8n/image/upload/v1532311228/nachos.jpg",
    title: "Nachos",
    description:
      "Corn chips, melted jack cheese, vegetarian black beans, salsa, guacamole and filling.",
    price: 12.5,
    filling: true,
    //Nachos Modification
    modifications: [
      { name: "Add Sour Cream", price: 0.5 },
      { name: "Add Fresh Jalapenos", price: 0.5 },
      { name: "Add Pickled Jalapeños" },
      { name: "Add Chopped Onions" },
      { name: "Add Coriander" },
      { name: "Add Roasted Jalapeño Salsa (Mild)" },
      { name: "Add Smoky Chipotle Salsa (Spicy)" },
      { name: "Add Habanero Salsa (Extra Spicy)" },
      { name: "No Cheese" },
      { name: "No Guacamole" },
      { name: "No Salsa" },
      { name: "No Pico De Gallo" },
      {
        name: "No Beans"
      }
    ]
  }),
  new Item({
    imagePath:
      "https://res.cloudinary.com/dxzy39s8n/image/upload/v1532311237/Nacho_Fries.jpg",
    title: "Nacho Fries",
    description: "Nacho Fries",
    price: 13.0,
    //Nachos Modification
    modifications: [
      { name: "Add Roasted Jalapeño Salsa (Mild)" },
      { name: "Add Smoky Chipotle Salsa (Spicy)" },
      { name: "Add Habanero Salsa (Extra Spicy)" },
      { name: "Add Fresh Jalapenos", price: 0.5 },
      { name: "Add Queso", price: 2 },
      { name: "Add Extra Sour Cream", price: 0.5 },
      { name: "Add Pickled Jalapeños" },
      { name: "Add Chopped Onions" },
      { name: "Add Coriander" },
      { name: "Add Chipotle Mayo", price: 0.5 },
      { name: "Add Jalapeno Ketchup", price: 0.5 },
      { name: "Add Chimi Mex Mayo (vegan)", price: 0.5 },
      { name: "No Sour Cream" },
      { name: "No Cheese" },
      { name: "No Guacamole" },
      { name: "No Beans" },
      { name: "No Pico De Gallo" },
      { name: "No Salsa" }
    ]
  }),
  new Item({
    imagePath:
      "https://res.cloudinary.com/dxzy39s8n/image/upload/v1532407745/salad.jpg",
    title: "Salad",
    description:
      "Mixed leaf lettuce, corn, cucumber, pico de gallo salsa, mexican vinaigrette dressing and filling.",
    price: 11.5,
    modifications: [
      { name: "Add Guacamole", price: 2 },
      { name: "Add Queso", price: 2 },
      { name: "Add Sour Cream $0.50", price: 0.5 },
      { name: "Add Fresh Jalapeños", price: 0.5 },
      { name: "Add Pickled Jalapeños" },
      { name: "Add Chopped Onions" },
      { name: "Add Coriander" },
      { name: "Add Roasted Jalapeño Salsa (Mild)" },
      { name: "Add Smoky Chipotle Salsa (Spicy)" },
      { name: "Add Habanero Salsa (Extra Spicy)" },
      { name: "No Pico De Gallo" },
      { name: "No Dressing" }
    ]
  }),
  new Item({
    imagePath:
      "https://res.cloudinary.com/dxzy39s8n/image/upload/v1532311220/kids.jpg",
    title: "Kids",
    description:
      "Choose from our little guy burritos, kids' nachos or jack cheese quesadillas below.",
    price: 5.0,
    modifications: [
      { name: "Add Guacamole", price: 1 },
      { name: "Use Brown Rice", price: 0.5 },
      { name: "Use Whole Wheat Tortilla", price: 0.5 },
      { name: "Add Sour Cream $0.50", price: 0.5 },
      { name: "No Cheese" },
      { name: "No Pico De Gallo" },
      { name: "No Beans" },
      { name: "No Rice" }
    ]
  }),
  new Item({
    imagePath:
      "https://res.cloudinary.com/dxzy39s8n/image/upload/v1532408001/fries.jpg",
    title: "Fries",
    description: "Fries",
    price: 5.0,
    modifications: [
      { name: "Add Chipotle Mayo", price: 0.5 },
      { name: "Add Jalapeno Ketchup", price: 0.5 },
      { name: "Add Chimi Mex Mayo (vegan)", price: 0.5 },
      { name: "No Seasoning" },
      { name: "Extra GYG Salt" },
      { name: "Extra Chipotle Seasoning" },
      { name: "Add Plain Queso", price: 2 },
      { name: "Add Mild Queso", price: 2 },
      { name: "Add Spicy Queso", price: 2 }
    ]
  }),
  new Item({
    imagePath:
      "https://res.cloudinary.com/dxzy39s8n/image/upload/v1532311211/cheese-fries.jpg",
    title: "Cheese Fries",
    description: "Cheese Fries (Queso)",
    price: 5.0,
    modifications: [
      { name: "Add Chipotle Mayo", price: 0.5 },
      { name: "Add Jalapeno Ketchup", price: 0.5 },
      { name: "Add Chimi Mex Mayo (vegan)", price: 0.5 },
      { name: "No Seasoning" },
      { name: "Extra GYG Salt" },
      { name: "Extra Chipotle Seasoning" },
      { name: "Add Plain Queso", price: 2 },
      { name: "Add Mild Queso", price: 2 },
      { name: "Add Spicy Queso", price: 2 }
    ]
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
