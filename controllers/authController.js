const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { generateToken } = require("../utils/token");

const { sendActivationEmail } = require("../utils/emailSender");

const signup = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email allaqachon mavjud" });

    const hashed = await bcrypt.hash(password, 10);
    const activationCode = Math.floor(100000 + Math.random() * 900000).toString(); // 6 xonali raqamli kod

    const user = await User.create({
      name,
      email,
      password: hashed,
      role: role || 'user',
      activationCode,
    });

    await sendActivationEmail(email, activationCode); // Emailga kod yuborish

    return res.status(201).json({ message: "Foydalanuvchi yaratildi. Emailga tasdiqlash kodi yuborildi." });
  } catch (err) {
    return res.status(500).json({ message: "Xatolik", error: err.message });
  }
};


const activateAccount = async (req, res) => {
  const { email, token } = req.body;

  try {
   const user = await User.findOne({ email });
if (!user || user.activationCode !== token)
  return res.status(400).json({ message: "Kod noto‘g‘ri" });

user.isActive = true;
user.activationCode = null;
await user.save();


    return res.json({ message: "Hisob faollashtirildi" });
  } catch (err) {
    return res.status(500).json({ message: "Xatolik", error: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !user.isActive)
      return res.status(400).json({ message: "Email topilmadi yoki aktiv emas" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Parol noto‘g‘ri" });

    const token = generateToken(user);
    return res.json({ message: "Kirish muvaffaqiyatli", token });
  } catch (err) {
    return res.status(500).json({ message: "Xatolik", error: err.message });
  }
};

module.exports = { signup, login, activateAccount };
