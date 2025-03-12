const express = require("express");
const router = express.Router();
const CarrosController = require("../controllers/CarrosController");

router.get("/", CarrosController.listarCarros);
router.post("/", CarrosController.criarCarro);
router.put("/:id", CarrosController.atualizarCarro);
router.delete("/:id", CarrosController.deletarCarro);
module.exports = router;
