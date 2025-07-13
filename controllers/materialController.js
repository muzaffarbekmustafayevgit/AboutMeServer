
// controllers/materialController.js
const Material = require("../models/Material");

exports.uploadMaterial = async (req, res) => {
  try {
    const { lessonId, fileName, fileUrl } = req.body;
    const material = await Material.create({ lessonId, fileName, fileUrl });
    res.status(201).json(material);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMaterialsByLesson = async (req, res) => {
  try {
    const materials = await Material.find({ lessonId: req.params.lessonId });
    res.json(materials);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteMaterial = async (req, res) => {
  try {
    await Material.findByIdAndDelete(req.params.id);
    res.json({ message: "Fayl o‘chirildi" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
