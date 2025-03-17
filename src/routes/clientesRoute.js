const express = require("express");
const router = express.Router();
const ClientesController = require("../controllers/clientesController");
router.get("/", ClientesController.listarClientes);
router.post("/", ClientesController.criarCliente);
module.exports = router;
