// =======================================================
// 🧑‍💻 Students:
// בהאא אבו געפר - 326497484
// עומרי ארגמן - 314772351
// =======================================================

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const seed=require('./seedProducts')//seed db with product list, upon server load
const cors = require('cors');
require('dotenv').config();
const app = express();

// Middleware
app.use(cors()); // Enable CORS for frontend-backend communication
app.use(express.json());

// Serve static files (images)
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// MongoDB URI
const uri = 'mongodb://localhost:27017/phone-store';

async function startServer() {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('✅ MongoDB connected');
    
    console.log('📁 Serving static assets from:', path.join(__dirname, 'assets'));
    await seed();
    // Routes
    const productRoutes = require('./routes/productRoutes');
    const orderRoutes = require('./routes/orderRoutes');

    app.use('/api/products', productRoutes);
    app.use('/api/orders', orderRoutes);

    app.get('/', (req, res) => {
      res.send('📱 Phone Store API is running');
    });

    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  }
}

startServer();
