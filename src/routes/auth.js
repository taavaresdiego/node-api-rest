const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User"); // Ajuste o caminho conforme necessário
const router = express.Router();

router.post("/register", async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    // Verifique se o usuário já existe
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ mensagem: "Usuário já existe" });
    }

    // Crie uma nova instância do usuário
    user = new User({
      nome,
      email,
      senha,
    });

    // Gere o salt e hash a senha
    const salt = await bcrypt.genSalt(10);
    user.senha = await bcrypt.hash(senha, salt);

    // Salve o usuário no banco de dados
    await user.save();

    res.status(201).json({ mensagem: "Usuário registrado com sucesso" });
  } catch (erro) {
    console.error(erro.message);
    res
      .status(500)
      .json({ mensagem: "Erro ao registrar usuário", erro: erro.message });
  }
});

module.exports = router;
