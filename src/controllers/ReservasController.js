const Reserva = require("../models/Reserva");

const listarReservas = async (req, res) => {
  try {
    // Usando populate para buscar os dados completos dos carros e do cliente
    const reservas = await Reserva.find().populate("carros cliente");
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao buscar reservas", erro: error.message });
  }
};

const criarReserva = async (req, res) => {
  try {
    // Extraindo todos os campos do corpo da requisição
    const { cliente, carros, dataInicio, dataFim, valorTotal, status } = req.body;
    const novaReserva = new Reserva({
      cliente,
      carros,
      dataInicio,
      dataFim,
      valorTotal,
      status, // status pode ser opcional, pois o schema define um default
    });
    await novaReserva.save();
    res.status(201).json(novaReserva);
  } catch (error) {
    res.status(400).json({ mensagem: "Erro ao criar reserva", erro: error.message });
  }
};

module.exports = { listarReservas, criarReserva };
