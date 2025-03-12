const Usuario = require(".././models/Usuario");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports = {
  registrar: async (req, res) => {
    const { nome, email, senha } = req.body;
    try {
      const usuario = new Usuario({ nome, email, senha });
      await usuario.save();
      res.status(201).json({ mensagem: "Usuário registrado com sucesso!" });
    } catch (error) {
      res
        .status(400)
        .json({ mensagem: "Erro ao registrar usuário", erro: error.message });
    }
  },
  login: async (req, res) => {
    const { email, senha } = req.body;
    const usuario = await Usuario.findOne({ email });
    if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
      return res.status(400).json({ mensagem: "Credenciais inválidas" });
    }
    const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  },
};
