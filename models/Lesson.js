const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  moduleId: { type: mongoose.Schema.Types.ObjectId, ref: "Module" },
  title: String,
  type: { type: String, enum: ["video", "article", "quiz"], default: "video" },
  contentUrl: String,
  duration: String,
});

module.exports = mongoose.model("Lesson", lessonSchema);
