const Carro = require("../models/carro");
module.exports = {
  listarCarros: async (req, res) => {
    const carros = await Carro.find();
    res.json(carros);
  },
  criarCarro: async (req, res) => {
    const { marca, modelo, ano, precoPorDia } = req.body;
    const novoCarro = new Carro({ marca, modelo, ano, precoPorDia });
    await novoCarro.save();
    res.status(201).json(novoCarro);
  },
  atualizarCarro: async (req, res) => {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    const carroAtualizado = await Carro.findByIdAndUpdate(
      id,
      dadosAtualizados,
      { new: true }
    );
    if (!carroAtualizado)
      return res.status(404).json({ mensagem: "Carro não encontrado" });
    res.json(carroAtualizado);
  },
  deletarCarro: async (req, res) => {
    const { id } = req.params;
    const carroDeletado = await Carro.findByIdAndDelete(id);
    if (!carroDeletado)
      return res.status(404).json({ mensagem: "Carro não encontrado" });
    res.json({ mensagem: "Carro deletado com sucesso" });
  },
};
