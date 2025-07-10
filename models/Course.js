const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  author: String,
  category: String,
  level: String,
  price: Number,
  status: { type: String, enum: ["active", "draft"], default: "draft" },
});

module.exports = mongoose.model("Course", courseSchema);
