const express = require("express");
const router = express.Router();
const { signup, login, activateAccount } = require("../controllers/authController");

router.post("/signup", signup);
router.post("/activate_account", activateAccount);
router.post("/login", login);

module.exports = router;
