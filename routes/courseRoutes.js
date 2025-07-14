const express = require("express");
const router = express.Router();
const {
  createCourse,
  getAllCourses,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");
const { verifyToken, checkRole } = require("../middlewares/authMiddleware");

// ➕ Kurs yaratish
router.post("/", verifyToken, checkRole("moderator"), createCourse);

// 📚 Barcha kurslarni olish
router.get("/", verifyToken, checkRole("moderator"), getAllCourses);

// ✏️ Kursni yangilash
router.put("/:id", verifyToken, checkRole("moderator"), updateCourse);

// 🗑️ Kursni o‘chirish
router.delete("/:id", verifyToken, checkRole("moderator"), deleteCourse);

module.exports = router;
