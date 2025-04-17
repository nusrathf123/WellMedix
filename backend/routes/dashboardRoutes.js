// 📁 backend/routes/dashboardRoutes.js

const express = require("express");
const router = express.Router();
const MoodEntry = require("../models/MoodEntry");

// GET /api/dashboard/:userId - Fetch dashboard data
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const recentEntries = await MoodEntry.find({ userId })
      .sort({ createdAt: -1 })
      .limit(5);

    const avgStress = await MoodEntry.aggregate([
      { $match: { userId } },
      { $group: { _id: null, avgStress: { $avg: "$stressLevel" } } },
    ]);

    res.json({
      recentEntries,
      avgStress: avgStress[0]?.avgStress || 0,
    });
  } catch (err) {
    console.error("❌ Dashboard data fetch failed:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
