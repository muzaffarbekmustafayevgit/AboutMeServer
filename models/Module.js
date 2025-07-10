const mongoose = require("mongoose");

const moduleSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  title: String,
  order: Number,
});

module.exports = mongoose.model("Module", moduleSchema);
