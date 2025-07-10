const UserProgress = require("../models/UserProgress");

// 1. Darsni tugallashni saqlash
exports.markLessonComplete = async (req, res) => {
  const { courseId, lessonId } = req.body;
  const userId = req.user.id;

  try {
    let progress = await UserProgress.findOne({ userId, courseId });

    if (!progress) {
      progress = await UserProgress.create({
        userId,
        courseId,
        completedLessons: [lessonId],
      });
    } else {
      if (!progress.completedLessons.includes(lessonId)) {
        progress.completedLessons.push(lessonId);
        progress.lastAccessed = Date.now();
        await progress.save();
      }
    }

    res.status(200).json(progress);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 2. Kursdagi yutuqlarni olish
exports.getUserProgress = async (req, res) => {
  const { userId, courseId } = req.params;

  try {
    const progress = await UserProgress.findOne({ userId, courseId })
      .populate("completedLessons", "title")
      .populate("courseId", "title");
    
    if (!progress) {
      return res.status(404).json({ message: "Yutuqlar topilmadi" });
    }

    res.json(progress);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
