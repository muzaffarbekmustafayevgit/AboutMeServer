const express = require("express");
const router = express.Router();
const {
  markLessonComplete,
  getUserProgress,
} = require("../controllers/progressController");

const { verifyToken, checkRole } = require("../middlewares/authMiddleware");

router.post("/complete", verifyToken, markLessonComplete); // barcha roldagilar bajara oladi
router.get("/:userId/:courseId", verifyToken, checkRole("moderator"), getUserProgress);

module.exports = router;
