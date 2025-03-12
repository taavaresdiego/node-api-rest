const request = require("supertest");
const app = require("../../src/index");
const mongoose = require("mongoose");

describe("Testes de ClientesController", () => {
  afterAll(async () => {
    await mongoose.connection.close();
  });
  it("Deve listar clientes", async () => {
    const res = await request(app).get("/api/clientes");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it("Deve criar um cliente", async () => {
    const res = await request(app).post("/api/clientes").send({
      nome: "Teste Cliente",
      email: "teste@email.com",
      telefone: "123456789",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("_id");
  });
});
