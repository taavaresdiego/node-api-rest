const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("./config/database");
const carrosRoutes = require("./routes/carrosRoute");
const clientesRoutes = require("./routes/clientesRoute");
const reservasRoutes = require("./routes/reservasRoute");
const authRoutes = require("./routes/authRoute");
const authMiddleware = require("./middlewares/authMiddleware");
dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/carros", authMiddleware, carrosRoutes);
app.use("/api/clientes", authMiddleware, clientesRoutes);
app.use("/api/reservas", authMiddleware, reservasRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
