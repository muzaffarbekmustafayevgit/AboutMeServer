const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB ulanish muvaffaqiyatli");
  } catch (err) {
    console.error("Ulanishda xatolik:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
