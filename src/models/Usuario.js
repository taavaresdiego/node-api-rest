// models/Usuario.js
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const usuarioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Middleware para criptografar a senha antes de salvar
usuarioSchema.pre("save", async function (next) {
  // Correto: usuarioSchema
  if (!this.isModified("password")) return next(); // Correto: password
  this.password = await bcrypt.hash(this.password, 10); // Correto: password
  next();
});

module.exports = mongoose.model("Usuario", usuarioSchema); // Correto: usuarioSchema
