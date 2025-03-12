const request = require("supertest");
const app = require("../../src/index");
const mongoose = require("mongoose");

describe("Testes de ReservasController", () => {
  afterAll(async () => {
    await mongoose.connection.close();
  });
  it("Deve listar reservas", async () => {
    const res = await request(app).get("/api/reservas");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it("Deve criar uma reserva", async () => {
    const res = await request(app).post("/api/reservas").send({
      carro: "60a6b9f8c5e47e001f8b4567",
      cliente: "60a6b9f8c5e47e001f8b4568",
      dataInicio: "2025-01-01",
      dataFim: "2025-01-10",
      valorTotal: 5000,
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("_id");
  });
});
