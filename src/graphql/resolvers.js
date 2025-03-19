// src/graphql/resolvers.js
const Carro = require("../models/Carro");

const resolvers = {
  Query: {
    carros: async () => {
      return await Carro.find();
    },
    carro: async ({ id }) => {
      return await Carro.findById(id);
    },
  },
  Mutation: {
    createCarro: async ({ modelo, marca, ano, cor, disponivel }) => {
      const newCarro = new Carro({ modelo, marca, ano, cor, disponivel });
      return await newCarro.save();
    },
    updateCarro: async ({ id, modelo, marca, ano, cor, disponivel }) => {
      const updatedCarro = await Carro.findByIdAndUpdate(
        id,
        { modelo, marca, ano, cor, disponivel },
        { new: true }
      );
      return updatedCarro;
    },
    deleteCarro: async ({ id }) => {
      await Carro.findByIdAndDelete(id);
      return true;
    },
  },
};

module.exports = resolvers;
