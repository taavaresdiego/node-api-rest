const express = require("express");
const router = express.Router();
const ReservasController = require("../controllers/ReservasController");
router.get("/", ReservasController.listarReservas);
router.post("/", ReservasController.criarReserva);
module.exports = router;
