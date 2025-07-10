const Lesson = require("../models/Lesson");

exports.createLesson = async (req, res) => {
  try {
    const lesson = await Lesson.create(req.body);
    res.status(201).json(lesson);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getLessonsByModule = async (req, res) => {
  try {
    const lessons = await Lesson.find({ moduleId: req.params.moduleId });
    res.json(lessons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateLesson = async (req, res) => {
  try {
    const updated = await Lesson.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteLesson = async (req, res) => {
  try {
    await Lesson.findByIdAndDelete(req.params.id);
    res.json({ message: "Dars o‘chirildi" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
