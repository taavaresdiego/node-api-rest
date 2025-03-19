// src/routes/carrosRoute.js
const express = require("express");
const router = express.Router();
const Carro = require("../models/Carro"); // Import the Carro model

// Example route (adjust to your actual routes)
router.get("/", async (req, res) => {
  try {
    const carros = await Carro.find();
    res.json(carros);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ... other routes ...

module.exports = router;
