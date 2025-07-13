module.exports = (err, req, res, next) => {
    console.error("❌ Error:", err.stack);
    res.status(err.status || 500).json({
      success: false,
      message: err.message || "Serverda ichki xatolik yuz berdi.",
    });
  };
  