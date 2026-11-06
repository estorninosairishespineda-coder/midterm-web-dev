
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString()
  });
});

let products = [
  { id: 1, name: "Laptop", price: 35000 },
  { id: 2, name: "Mouse", price: 500 }
];

app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});

app.post("/api/products", (req, res) => {
  const { name, price } = req.body;

  if (!name || price === undefined || price === null) {
    return res.status(400).json({
      error: "Name and price are required"
    });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});

module.exports = app;
