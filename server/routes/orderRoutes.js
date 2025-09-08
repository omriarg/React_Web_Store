//order endpoint routing
const express = require('express');
const router = express.Router();
const { createOrder, getCountries ,getOrders} = require('../controllers/orderController');

// POST /api/orders
router.post('/', createOrder);
router.get('/countries',getCountries);
module.exports = router;
