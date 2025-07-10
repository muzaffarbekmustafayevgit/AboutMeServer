const express = require("express");
const router = express.Router();
const {
  createModule,
  getModulesByCourse,
  updateModule,
  deleteModule,
} = require("../controllers/moduleController");

const { verifyToken, checkRole } = require("../middlewares/authMiddleware");

router.post("/", verifyToken, checkRole("moderator"), createModule);
router.get("/:courseId", verifyToken, checkRole("moderator"), getModulesByCourse);
router.put("/:id", verifyToken, checkRole("moderator"), updateModule);
router.delete("/:id", verifyToken, checkRole("moderator"), deleteModule);

module.exports = router;
