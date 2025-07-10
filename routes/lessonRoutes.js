const express = require("express");
const router = express.Router();
const {
  createLesson,
  getLessonsByModule,
  updateLesson,
  deleteLesson,
} = require("../controllers/lessonController");

const { verifyToken, checkRole } = require("../middlewares/authMiddleware");

router.post("/", verifyToken, checkRole("moderator"), createLesson);
router.get("/:moduleId", verifyToken, checkRole("moderator"), getLessonsByModule);
router.put("/:id", verifyToken, checkRole("moderator"), updateLesson);
router.delete("/:id", verifyToken, checkRole("moderator"), deleteLesson);

module.exports = router;
