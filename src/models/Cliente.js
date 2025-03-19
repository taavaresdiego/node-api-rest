// models/Cliente.js
const mongoose = require("mongoose");

const ClienteSchema = new mongoose.Schema({
  nome: String,
  email: { type: String, unique: true },
  telefone: String,
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true }
});

// Virtual para obter a reserva associada (1:1)
// Isso não cria um campo no banco, mas permite populá-lo em consultas.
ClienteSchema.virtual("reserva", {
  ref: "Reserva",
  localField: "_id",
  foreignField: "cliente",
  justOne: true
});

// Permite que a virtual apareça no JSON ou no objeto convertido
ClienteSchema.set("toJSON", { virtuals: true });
ClienteSchema.set("toObject", { virtuals: true });

module.exports = mongoose.model("Cliente", ClienteSchema);
