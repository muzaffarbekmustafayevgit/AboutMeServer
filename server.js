const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const listEndpoints = require("express-list-endpoints"); // 🔍 Qo‘shildi

dotenv.config();
const app = express();
connectDB();
app.use(express.json());

// 📦 Routelar
const authRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/courseRoutes");
const moduleRoutes = require("./routes/moduleRoutes");
const lessonRoutes = require("./routes/lessonRoutes");
const quizRoutes = require("./routes/quizRoutes");
const materialRoutes = require("./routes/materialRoutes");
const progressRoutes = require("./routes/progressRoutes");

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

  // 🔍 Barcha endpointlar ro‘yxatini ko‘rsatadi
  const endpoints = listEndpoints(app);
  console.log("\n📜 API ROUTES RO‘YXATI:");
  endpoints.forEach((ep) => {
    console.log(`➡️  [${ep.methods.join(", ")}] ${ep.path}`);
  });
});
