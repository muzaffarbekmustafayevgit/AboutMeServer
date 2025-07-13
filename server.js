const express = require("express");
const cors = require("cors"); // 🧩 CORS ulandi
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const listEndpoints = require("express-list-endpoints");

dotenv.config();
const app = express();
connectDB();
app.use(express.json());

// ✅ CORS sozlandi
app.use(cors({
  origin: "http://localhost:5173", // Frontend manzili, kerak bo‘lsa "*" yoki boshqa domen yozing
  credentials: true,
}));

// 📦 Routelar
const authRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/courseRoutes");
const moduleRoutes = require("./routes/moduleRoutes");
const lessonRoutes = require("./routes/lessonRoutes");
const quizRoutes = require("./routes/quizRoutes");
const materialRoutes = require("./routes/materialRoutes");
const progressRoutes = require("./routes/progressRoutes");
const errorHandler = require("./middlewares/errorHandler");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
app.use(errorHandler); // Har doim route’lardan so‘ng
app.use(helmet());
app.use(morgan("dev")); // yoki "combined"
app.use((req, res, next) => {
  res.status(404).json({ message: "🔍 Bunday route topilmadi!" });
});
app.use(cookieParser());

// 🔗 Ulash
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/modules", moduleRoutes);
app.use("/api/lessons", lessonRoutes);
app.use("/api/quizzes", quizRoutes);
app.use("/api/materials", materialRoutes);
app.use("/api/progress", progressRoutes);

// Test uchun
app.get("/", (req, res) => {
  res.send("Server ishga tushdi!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server ${PORT}-portda ishlamoqda`);

  const endpoints = listEndpoints(app);
  console.log("\n📜 API ROUTES RO‘YXATI:");
  endpoints.forEach((ep) => {
    console.log(`➡️  [${ep.methods.join(", ")}] ${ep.path}`);
  });
});
