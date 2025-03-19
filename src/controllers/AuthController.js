const Usuario = require("../models/Usuario"); // Added this line
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const AuthController = {
  registrar: async (req, res, hashedPassword) => {
    try {
      const { name, email } = req.body;
      const usuario = new Usuario({ name, email, password: hashedPassword });
      await usuario.save();
      res.status(201).json({ mensagem: "Usuário registrado com sucesso!" });
    } catch (error) {
      res
        .status(400)
        .json({ mensagem: "Erro ao registrar usuário", erro: error.message });
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body; // Changed senha to password
    const usuario = await Usuario.findOne({ email });
    if (!usuario || !(await bcrypt.compare(password, usuario.password))) {
      // Changed senha to password
      return res.status(400).json({ mensagem: "Credenciais inválidas" });
    }
    const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  },
};
module.exports = AuthController;
