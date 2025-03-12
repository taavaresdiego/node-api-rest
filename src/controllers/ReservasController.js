const Reserva = require("../models/Reserva");
module.exports = {
  listarReservas: async (req, res) => {
    const reservas = await Reserva.find().populate("carro cliente");
    res.json(reservas);
  },
  criarReserva: async (req, res) => {
    try {
      const { carro, cliente, dataInicio, dataFim, valorTotal } = req.body;
      const novaReserva = new Reserva({
        carro,
        cliente,
        dataInicio,
        dataFim,
        valorTotal,
      });
      await novaReserva.save();
      res.status(201).json(novaReserva);
    } catch (error) {
      res
        .status(400)
        .json({ mensagem: "Erro ao criar reserva", erro: error.message });
    }
  },
};

const listarReservas = (req, res) => {
  res.status(200).json([]);
};

const criarReserva = (req, res) => {
  const { carro, cliente, dataInicio } = req.body;
  res.status(201).json({ carro, cliente, dataInicio });
};

module.exports = { listarReservas, criarReserva };
