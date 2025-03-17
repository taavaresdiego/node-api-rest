const Cliente = require("../models/cliente");

const listarClientes = async (req, res) => {
  try {
    // Se desejar listar apenas os clientes do usuário autenticado, você pode filtrar por req.userId
    const clientes = await Cliente.find({ usuario: req.userId });
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao buscar clientes", erro: error.message });
  }
};

const criarCliente = async (req, res) => {
  try {
    const { nome, email, telefone } = req.body;
    // Cria o cliente utilizando o id do usuário autenticado
    const novoCliente = new Cliente({ nome, email, telefone, usuario: req.userId });
    await novoCliente.save();
    res.status(201).json(novoCliente);
  } catch (error) {
    res.status(400).json({ mensagem: "Erro ao criar cliente", erro: error.message });
  }
};

module.exports = { listarClientes, criarCliente };


module.exports = { listarClientes, criarCliente };
