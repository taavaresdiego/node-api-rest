const Cliente = require("../models/Cliente");
module.exports = {
  listarClientes: async (req, res) => {
    const clientes = await Cliente.find();
    res.json(clientes);
  },
  criarCliente: async (req, res) => {
    try {
      const { nome, email, telefone } = req.body;
      const novoCliente = new Cliente({ nome, email, telefone });
      await novoCliente.save();
      res.status(201).json(novoCliente);
    } catch (error) {
      res
        .status(400)
        .json({ mensagem: "Erro ao criar cliente", erro: error.message });
    }
  },
};
const listarClientes = (req, res) => {
  res.status(200).json([]);
};

const criarCliente = async (req, res) => {
  const { nome, email, telefone } = req.body;
  res.status(201).json({ nome, email, telefone, _id: "um_id" });
};

module.exports = { listarClientes, criarCliente };
