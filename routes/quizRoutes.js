const express = require("express");
const router = express.Router();
const {
  createQuiz,
  getQuizzesByLesson,
  updateQuiz,
  deleteQuiz,
} = require("../controllers/quizController");

const { verifyToken, checkRole } = require("../middlewares/authMiddleware");

router.post("/", verifyToken, checkRole("moderator"), createQuiz);
router.get("/:lessonId", verifyToken, checkRole("moderator"), getQuizzesByLesson);
router.put("/:id", verifyToken, checkRole("moderator"), updateQuiz);
router.delete("/:id", verifyToken, checkRole("moderator"), deleteQuiz);

module.exports = router;
