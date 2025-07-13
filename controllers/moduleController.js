// controllers/moduleController.js
const Module = require("../models/Module");

exports.createModule = async (req, res) => {
  try {
    const newModule = await Module.create(req.body);
    res.status(201).json(newModule);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getModulesByCourse = async (req, res) => {
  try {
    const modules = await Module.find({ courseId: req.params.courseId });
    res.json(modules);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateModule = async (req, res) => {
  try {
    const updated = await Module.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteModule = async (req, res) => {
  try {
    await Module.findByIdAndDelete(req.params.id);
    res.json({ message: "Modul o‘chirildi" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
