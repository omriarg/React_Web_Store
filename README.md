Pulse Mobile Store
==================

A full-stack React + Node.js + MongoDB/MySQL web application built as part of the "Pulse Mobile Store" project.  
The app is a responsive online store for mobile phones, including product browsing, a shopping cart, checkout flow, and order persistence.

--------------------------------------------------
🚀 Features
--------------------------------------------------
- Product Catalog – Browse a collection of mobile phones with images, descriptions, and prices
- Shopping Cart – Add, update, and remove items, with local storage persistence
- Checkout Flow – Enter user details and simulate an order checkout process
- Order Management – Orders are stored in the backend (MongoDB or MySQL)
- Responsive UI – Built with React, React Router, Bootstrap/MUI, Tailwind

--------------------------------------------------
📂 Project Structure
--------------------------------------------------
**React_Web_Store/**
│

├── client/                        # React frontend

│   ├── src/

│   │   ├── components/

│   │   │   ├── ProductContainer.jsx

│   │   │   ├── Cart.jsx

│   │   │   ├── CheckOutContainer.jsx

│   │   │   ├── CheckOut.jsx

│   │   │   └── About.jsx

│   │   ├── App.jsx

│   │   └── index.js

│   └── package.json

│

├── server/                        # Node.js + Express backend

│   ├── models/                    # Database models (MongoDB / MySQL)

│   ├── routes/                     # API endpoints (products, orders, etc.)

│   ├── app.js

│   └── package.json
│


└── README.txt

--------------------------------------------------
⚙️ Installation & Setup
--------------------------------------------------
1. Clone the repository:
   git clone https://github.com/<your-username>/pulse-mobile-store.git
   cd pulse-mobile-store

2. Setup backend (Node.js + Express):
   cd server
   npm install

   Configure .env (see server/.env.example) for MongoDB or MySQL connection.

   Run backend:
   npm start

3. Setup frontend (React + Vite/CRA):
   cd ../client
   npm install
   npm run dev   # or npm start if using CRA

   The app will be available at:
   http://localhost:5173   (for Vite)
   http://localhost:3000   (for CRA)

--------------------------------------------------
📊 Tech Stack
--------------------------------------------------
- Frontend: React, React Router, Bootstrap / MUI, Tailwind
- Backend: Node.js, Express
- Database: MongoDB or MySQL (configurable)
- State Management: React Hooks (useState, useEffect), localStorage for persistence

--------------------------------------------------
📖 Example Flow
--------------------------------------------------
1. Browse available mobile products
2. Add selected products to the cart
3. Proceed to checkout and fill in user details
4. Confirm order → order is saved in the database
5. View order summary

--------------------------------------------------
📚 References
--------------------------------------------------
- React Docs: https://react.dev/
- Node.js Docs: https://nodejs.org/
- Express Docs: https://expressjs.com/
- MongoDB Docs: https://www.mongodb.com/docs/
- MySQL Docs: https://dev.mysql.com/doc/
