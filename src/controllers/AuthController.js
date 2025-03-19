const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const AuthController = {
  registrar: async (req, res, password) => {
    // Recebendo a senha sem criptografar
    try {
      const { name, email } = req.body; // Pegando o password do req.body

      // Verificar se o email já existe
      const usuarioExistente = await Usuario.findOne({ email });
      if (usuarioExistente) {
        return res.status(400).json({ mensagem: "Email já cadastrado" });
      }

      const usuario = new Usuario({ name, email, password }); // Usando a senha sem criptografar
      await usuario.save();
      res.status(201).json({ mensagem: "Usuário registrado com sucesso!" });
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
      res
        .status(400)
        .json({ mensagem: "Erro ao registrar usuário", erro: error.message });
    }
  },
  // src/controllers/AuthController.js
  // ...
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const usuario = await Usuario.findOne({ email });

      if (!usuario) {
        return res.status(400).json({ mensagem: "Credenciais inválidas" });
      }

      const trimmedPassword = password.trim();
      const trimmedUsuarioPassword = usuario.password.trim();

      console.log("Senha digitada (com trim):", trimmedPassword); // Adicionado para debug
      console.log("Senha do banco (com trim):", trimmedUsuarioPassword); // Adicionado para debug
      console.log("Senha digitada (length):", trimmedPassword.length); // Adicionado para debug
      console.log("Senha do banco (length):", trimmedUsuarioPassword.length); // Adicionado para debug
      console.log(
        "Senha digitada (charCodeAt):",
        trimmedPassword.charCodeAt(0)
      ); // Adicionado para debug
      console.log(
        "Senha do banco (charCodeAt):",
        trimmedUsuarioPassword.charCodeAt(0)
      ); // Adicionado para debug

      const passwordMatch = await bcrypt.compare(
        trimmedPassword,
        trimmedUsuarioPassword
      );

      if (!passwordMatch) {
        return res.status(400).json({ mensagem: "Credenciais inválidas" });
      }
      // ...

      const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.json({ token });
    } catch (error) {
      console.error("Erro no login:", error);
      res
        .status(500)
        .json({ mensagem: "Erro interno do servidor", erro: error.message });
    }
  },
};

module.exports = AuthController;
