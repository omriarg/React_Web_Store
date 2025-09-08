const Order = require('../models/Order');
const mongoose = require('mongoose');

// POST create a new order
const createOrder = async (req, res) => {
  const {
    contact: { name, email, phone, address, country, city },
    carts,
    totalPrice,
    totalQuantity,
    fastDelivery,
  } = req.body;

  // server Side validation of order details
  if (
    !name || !email || !phone || !address || !country || !city ||
    !carts || carts.length === 0 || !totalPrice || !totalQuantity
  ) {
    return res.status(400).json({ error: 'Missing required order fields' });
  }

  try {
     
    const newOrder = new Order({
      customerName: name,
      email,
      phone,
      address: `${address}, ${city}, ${country}`,
      shippingMethod: fastDelivery ? 'Fast' : 'Standard',
      items: carts,
      totalPrice,
      totalQuantity,
      createdAt: new Date(),
    });

    const savedOrder = await newOrder.save();

    res.status(201).json({
      message: 'Order received!',
      OrderID: savedOrder._id,
    });
  } catch (err) {
    console.error('Error creating order:', err,items);
    res.status(500).json({ error: 'Failed to create order' });
  }
};

//mock data for country, city lists
const getCountries = (req, res) => {
  res.json({
    data: [
      {
        iso3: "USA",
        country: "United States",
        cities: ["New York", "Los Angeles", "Chicago"],
      },
      {
        iso3: "ISR",
        country: "Israel",
        cities: ["Tel Aviv", "Jerusalem", "Haifa"],
      },
      {
        iso3: "DEU",
        country: "Germany",
        cities: ["Berlin", "Munich", "Frankfurt"],
      },
    ],
  });
};

module.exports = {
  createOrder,
  getCountries
};
