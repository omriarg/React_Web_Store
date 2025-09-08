require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product.js')
const seedProducts = [
  {
    name: "Apple iPhone 16 Pro Max",
    price: 4699,
    description: "The newest iPhone with A18 chip and advanced camera.",
    imageURL: "/assets/iphone 16 pro max.jpg"
  },
  {
    name: "Samsung Galaxy S25 Ultra",
    price: 4499,
    description: "Flagship Galaxy phone with 200MP camera and Snapdragon Gen 4.",
    imageURL: "/assets/samsung galaxy s25 ultra.jpg"
  },
  {
    name: "Google Pixel 9 Pro",
    price: 4299,
    description: "Google's pure Android with upgraded AI and camera.",
    imageURL: "/assets/google pixel 9 pro.jpg"
  },
  {
    name: "OnePlus 13",
    price: 3899,
    description: "Performance-focused phone with fast charging and sleek design.",
    imageURL: "/assets/oneplus 13.jpg"
  },
  {
    name: "Samsung Galaxy Z Fold 6",
    price: 6599,
    description: "Foldable display and multitasking reimagined.",
    imageURL: "/assets/samsung galaxy z fold 6.jpg"
  },
  {
    name: "Motorola Razr Ultra (2025)",
    price: 4999,
    description: "Stylish flip phone with flexible display.",
    imageURL: "/assets/motorola razr ultra.jpg"
  },
  {
    name: "Xiaomi 15 Ultra",
    price: 3799,
    description: "Powerful camera system and premium build.",
    imageURL: "/assets/xiaomi 15 ultra.jpg"
  },
  {
    name: "Google Pixel 8a",
    price: 2599,
    description: "Great mid-range phone with Google's software experience.",
    imageURL: "/assets/google pixel 8a.jpg"
  },
  {
    name: "Nothing Phone 3",
    price: 2999,
    description: "Known for its unique transparent design and clean OS.",
    imageURL: "/assets/nothing phone 3.jpg"
  }
];
//this functions updates db with required product list
async function seed() {
  try {
   
    await Product.deleteMany({});
    console.log('🗑️ All existing products deleted.');

    await Product.insertMany(seedProducts);
    console.log('✅ Products seeded successfully.');

  } catch (err) {
    console.error('❌ Seeding failed:', err);
  } finally {
    return;
  }
}

module.exports=seed;