const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");

// Rota para registrar um novo usuário
router.post("/register", AuthController.registrar);

// Rota para login do usuário
router.post("/login", AuthController.login);

module.exports = router;
