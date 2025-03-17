// models/Reserva.js
const mongoose = require("mongoose");

const ReservaSchema = new mongoose.Schema({
  // Relação 1:1 com Cliente – cada cliente pode ter apenas uma reserva
  cliente: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Cliente", 
    required: true,
    unique: true 
  },
  // Relação muitos para muitos com Carro
  carros: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Carro", 
    required: true
  }],
  dataInicio: { type: Date, required: true },
  dataFim: { type: Date, required: true },
  valorTotal: { type: Number, required: true },
  status: {
    type: String,
    enum: ["pendente", "confirmada", "cancelada"],
    default: "pendente",
  },
});

module.exports = mongoose.model("Reserva", ReservaSchema);
