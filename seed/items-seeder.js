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
    price: 11.70,
    miniPrice: 8.00,
    filling: true,
    heat: true,
    size: true,
    modifications: [
      { name: "Add Guacamole", price: 2 },
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
      { name: "No Beans" }
    ]
  }),
  new Item({
    imagePath:
      "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531959419/enchiladas.jpg",
    title: "Enchiladas",
    description:
      "Your favourite burrito topped with salsas, melted jack cheese, sour cream, guacamole and corn chips.",
    price: 15.0,
    miniPrice: 10.00,
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
    price: 13.00,
    miniPrice: 9.00,
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
      "Your favourite burrito with sautéed capsicums, onions and mushrooms, fajita vinaigrette and sour cream. Rolled in a soft flour tortilla.",
    price: 13.0,
    miniPrice: 9.00,
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
    miniPrice: 8.00,
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
      "Your favourite burrito with sautéed capsicums, onions and mushrooms, fajita vinaigrette and sour cream served in a bowl.",
    price: 13.0,
    miniPrice: 9.00,
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
    heat: true,
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
    heat: true,
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
    price: 12.50,
    miniPrice: 9.00,
    filling: true,
    heat: true,
    size: true,
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
      { name: "No Beans" }
    ]
  }),
  new Item({
    imagePath:
      "https://res.cloudinary.com/dxzy39s8n/image/upload/v1532311237/Nacho_Fries.jpg",
    title: "Nacho Fries",
    description: "Nacho Fries",
    price: 13.0,
    miniPrice: 9.00,
    filling: true,
    heat: true,
    size: true,
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
    miniPrice: 8.00,
    heat: true,
    size: true,
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
    filling: true,
    heat: true,
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
    price: 0,
    options: [
      { name: "Jarritos Guava", price: 4.70, image: "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg" },
      { name: "Jarritos Lime", price: 4.70, image: "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg" },
      { name: "Jarritos Mandarin", price: 4.70, image: "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg" },
      { name: "Jarritos Cola", price: 4.70, image: "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg" },
      { name: "Coke 390ml", price: 3.20, image: "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg" },
      { name: "Coke 600ml", price: 4.20, image: "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg" },
      { name: "Coke No Sugar 390ml", price: 3.20, image: "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg" },
      { name: "Coke No Sugar 600ml", price: 4.20, image: "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg" },
      { name: "Sprite 390ml", price: 3.20, image: "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg" },
      { name: "Sprite 600ml", price: 4.20, image: "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg" },
      { name: "Lift 390ml", price: 3.20, image: "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg" },
      { name: "Mt Franklin Sparkling 450ml", price: 3.70, image: "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg" },
      { name: "Mt Franklin Still 600ml", price: 3.20, image: "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg" },
      { name: "Ginger Beer", price: 3.70, image: "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg" }
    ]
  }),
  new Item({
    imagePath:
      "https://res.cloudinary.com/dxzy39s8n/image/upload/v1532311201/sides.jpg",
    title: "Sides",
    price: 0,
    options: [
      {
        name: "Vegetarian Black Beans",
        description: "Simmered black beans with a blend of herbs and spices then salted to taste.",
        price: 3.00,
        image: "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg"
      },
      {
        name: "Brown Rice",
        description: "A healthier alternative to traditional white rice, brown rice has less carbohydrates and triple the amount of fibre than white rice.",
        price: 3.00,
        image: "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg"
      },
      {
        name: "White Rice",
        description: "Our steamed white rice is prepared using Mexican spices, coriander and slightly seasoned to taste.",
        price: 3.00,
        image: "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg"
      },
      {
        name: "Side Of Jalapeno Ketchup",
        description: "",
        price: 0.50,
        image: "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg"
      },
      {
        name: "Side Of Chipotle Mayo",
        description: "",
        price: 0.50,
        image: "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg"
      },
      {
        name: "Side Of Sour Cream",
        description: "",
        price: 0.50,
        image: "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg"
      },
      {
        name: "Side Of Mex Chimi Mayo (vegan)",
        description: "",
        price: 0.50,
        image: "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg"
      },
      {
        name: "Corn Chips",
        description: "GYG’s corn chips are made fresh daily in the restaurant and are ideal to dip into sides of guacamole or salsa, or even on their own.",
        price: 2.00,
        image: "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg"
      },
      {
        name: "Regular Side Of Guacamole",
        description: "Fresh avocados, diced tomatoes mixed with Spanish onions, diced jalapenos, coriander and a squeeze of lemon juice.",
        price: 3.00,
        image: "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg"
      },
      {
        name: "Large Side Of Guacamole",
        description: "Fresh avocados, diced tomatoes mixed with Spanish onions, diced jalapenos, coriander and a squeeze of lemon juice.",
        price: 5.50,
        image: "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg"
      },
      {
        name: "Regular Side Of Pico De Gallo",
        description: "Freshly diced tomatoes and Spanish onions, coriander and a squeeze of lemon juice.",
        price: 3.00,
        image: "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg"
      },
      {
        name: "Large Side Of Pico De Gallo",
        description: "Freshly diced tomatoes and Spanish onions, coriander and a squeeze of lemon juice.",
        price: 5.50,
        image: "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg"
      },
      {
        name: "Regular Side Of Spicy Queso",
        description: "",
        price: 3.00,
        image: "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg"
      },
      {
        name: "Regular Side Of Mild Queso",
        description: "",
        price: 3.00,
        image: "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg"
      },
      {
        name: "Regular Side Of Plain Queso",
        description: "",
        price: 3.00,
        image: "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg"
      },
      {
        name: "Large Side Of Spicy Queso",
        description: "",
        price: 5.50,
        image: "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg"
      },
      {
        name: "Large Side Of Mild Queso",
        description: "",
        price: 5.50,
        image: "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg"
      },
      {
        name: "Large Side Of Plain Queso",
        description: "",
        price: 5.50,
        image: "https://res.cloudinary.com/dxzy39s8n/image/upload/v1531740195/drinks.jpg"
      }
    ]
  }),
  new Item({
    imagePath:
      "https://res.cloudinary.com/dxzy39s8n/image/upload/v1532311191/churros.jpg",
    description: 
      "A Churro coated in cinnamon sugar and served with GYG’s Dulce de Leche.",
    title: "Churros",
    price: 3,
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
