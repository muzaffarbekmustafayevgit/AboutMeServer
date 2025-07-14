const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const listEndpoints = require("express-list-endpoints");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middlewares/errorHandler");

// 🌱 Yozuvlar
dotenv.config();
const app = express();
connectDB();

// 📦 Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173", // Frontend domeni
  credentials: true,
}));
app.use(helmet());
app.use(morgan("dev"));

// 🔗 ROUTELAR
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/courses", require("./routes/courseRoutes"));
app.use("/api/modules", require("./routes/moduleRoutes"));
app.use("/api/lessons", require("./routes/lessonRoutes"));
app.use("/api/quizzes", require("./routes/quizRoutes"));
app.use("/api/materials", require("./routes/materialRoutes"));
app.use("/api/progress", require("./routes/progressRoutes"));

// 🧪 Test route
app.get("/", (req, res) => {
  res.send("✅ Server ishga tushdi!");
});

// ❌ 404 Not Found handler — **route’lardan keyin**
app.use((req, res, next) => {
  res.status(404).json({ message: "🔍 Bunday route topilmadi!" });
});

// ❗ Global Error handler — **eng oxirida**
app.use(errorHandler);

// 🚀 Serverni ishga tushirish
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server ${PORT}-portda ishlamoqda`);

  // 🔎 Mavjud endpointlar ro‘yxati
  const endpoints = listEndpoints(app);
  console.log("\n📜 API ROUTES RO‘YXATI:");
  endpoints.forEach((ep) => {
    console.log(`➡️  [${ep.methods.join(", ")}] ${ep.path}`);
  });
});
