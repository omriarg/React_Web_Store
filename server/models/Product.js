const mongoose = require('mongoose');
//product table with required fields
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    imageURL: String,
    description: String
});

module.exports = mongoose.model('Product', productSchema);