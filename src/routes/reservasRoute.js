const express = require("express");
const router = express.Router();
const ReservasController = require("../controllers/reservasController");
router.get("/", ReservasController.listarReservas);
router.post("/", ReservasController.criarReserva);
module.exports = router;
