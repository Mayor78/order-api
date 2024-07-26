const express = require('express');
const serverless = require('serverless-http');
const app = express();

app.use(express.json());

// In-memory storage for orders
let orders = [];

// GET endpoint to retrieve all orders
app.get('/orders', (req, res) => {
  res.json(orders);
});

// POST endpoint to create a new order
app.post('/orders', (req, res) => {
  const newOrder = req.body;
  newOrder.id = orders.length + 1; // Simple ID assignment logic
  orders.push(newOrder);
  res.status(201).json(newOrder);
});

module.exports.handler = serverless(app);
