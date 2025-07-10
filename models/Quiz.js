const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  lessonId: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson" },
  question: String,
  options: [String], // ["A", "B", "C", "D"]
  correctAnswer: String, // to‘g‘ri javob
});

module.exports = mongoose.model("Quiz", quizSchema);
