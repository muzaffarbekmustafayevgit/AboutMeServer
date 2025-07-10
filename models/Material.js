const mongoose = require("mongoose");

const materialSchema = new mongoose.Schema({
  lessonId: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson" },
  fileName: String,
  fileUrl: String,
});

module.exports = mongoose.model("Material", materialSchema);
