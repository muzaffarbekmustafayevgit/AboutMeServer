// controllers/courseController.js
const Course = require("../models/Course");

exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses); // ✅ Object emas, to‘g‘ridan-to‘g‘ri array qaytaryapti
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// 📄 controllers/courseController.js
exports.updateCourse = async (req, res) => {
  try {
    const updated = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) {
      return res.status(404).json({ message: "Kurs topilmadi" });
    }
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
