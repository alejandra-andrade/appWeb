const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/todoApp", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado a MongoDB local");
  } catch (error) {
    console.error("Error conectando a MongoDB local:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
