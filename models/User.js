const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, enum: ["admin", "user", "moderator"], default: "user" },
  isActive: {
    type: Boolean,
    default: false,
  },
  activationCode: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("User", userSchema);
