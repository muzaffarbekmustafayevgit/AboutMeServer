const express = require("express");
const router = express.Router();
const {
  uploadMaterial,
  getMaterialsByLesson,
  deleteMaterial,
} = require("../controllers/materialController");

const { verifyToken, checkRole } = require("../middlewares/authMiddleware");

router.post("/", verifyToken, checkRole("moderator"), uploadMaterial);
router.get("/:lessonId", verifyToken, checkRole("moderator"), getMaterialsByLesson);
router.delete("/:id", verifyToken, checkRole("moderator"), deleteMaterial);

module.exports = router;
