const express = require("express");
const router = express.Router();
const {
  createCourse,
  getAllCourses,
} = require("../controllers/courseController");
const { verifyToken, checkRole } = require("../middlewares/authMiddleware");

router.post("/", verifyToken, checkRole("moderator"), createCourse);
router.get("/", verifyToken, checkRole("moderator"), getAllCourses);

module.exports = router;
