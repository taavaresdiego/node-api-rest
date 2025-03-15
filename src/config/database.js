const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Conectado com Sucesso!");
  } catch (err) {
    console.error("Erro detectado, o MongoDB não foi inicializado" + err.message);
    process.exit(1);
  }
};
connectDB();