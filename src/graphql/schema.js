// src/graphql/schema.js
const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Carro {
    id: ID!
    modelo: String!
    marca: String!
    ano: Int!
    cor: String!
    disponivel: Boolean!
  }

  type Query {
    carros: [Carro!]!
    carro(id: ID!): Carro
  }

  type Mutation {
    createCarro(modelo: String!, marca: String!, ano: Int!, cor: String!, disponivel: Boolean!): Carro!
    updateCarro(id: ID!, modelo: String, marca: String, ano: Int, cor: String, disponivel: Boolean): Carro
    deleteCarro(id: ID!): Boolean!
  }
`);

module.exports = schema;
