const express = require("express");
const router = express.Router();
const MoodEntry = require("../models/MoodEntry");

// GET mood history for a user
router.get("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log("📥 Fetching moods for userId:", userId);

    // Fetch moods sorted by creation time
    const moods = await MoodEntry.find({ userId }).sort({ createdAt: 1 });
    console.log("✅ Fetched mood entries:", moods);

    // Define emojis for moods
    const moodToEmoji = {
      happy: "😄",
      sad: "😢",
      stressed: "😣",
      neutral: "😐",
      excited: "🤩",
      angry: "😠",
      tired: "😴",
      anxious: "😰",
      calm: "😌",
    };

    // Format each entry
    const formatted = moods.map((entry) => {
      const moodDate = entry.date || entry.createdAt;
      return {
        date: moodDate ? new Date(moodDate).toISOString().split("T")[0] : "N/A",
        mood: entry.mood,
        emoji: moodToEmoji[entry.mood.toLowerCase()] || "❓",
        stressLevel: entry.stressLevel || 0,
      };
    });

    res.json({ data: formatted });
  } catch (error) {
    console.error("❌ Error fetching mood history:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
