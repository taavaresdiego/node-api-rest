const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UsuarioSchema = new mongoose.Schema({
  nome: String,
  email: { type: String, unique: true },
  senha: String,
});
UsuarioSchema.pre("save", async function (next) {
  if (!this.isModified("senha")) return next();
  this.senha = await bcrypt.hash(this.senha, 10);
  next();
});
module.exports = mongoose.model("Usuario", UsuarioSchema);
