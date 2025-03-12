const mongoose = require("mongoose");
const CarroSchema = new mongoose.Schema({
  marca: String,
  modelo: String,
  ano: Number,
  precoPorDia: Number,
  disponibilidade: { type: Boolean, default: true },
});
module.exports = mongoose.model("Carro", CarroSchema);
