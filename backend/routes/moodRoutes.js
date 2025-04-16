const express = require("express");
const router = express.Router();
const MoodEntry = require("../models/MoodEntry");

router.post("/add", async (req, res) => {
  try {
    const { userId, mood, note, stressLevel } = req.body;

    if (!userId || !mood) {
      return res.status(400).json({ message: "userId and mood are required" });
    }

    const newMood = new MoodEntry({
      userId,
      mood,
      note,
      stressLevel,
    });

    await newMood.save();
    res.status(201).json({ message: "Mood entry saved", data: newMood });
  } catch (err) {
    console.error("Error saving mood entry:", err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/history/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const moodHistory = await MoodEntry.find({ userId }).sort({ createdAt: 1 });

    const formatted = moodHistory.map((entry) => ({
      date: entry.createdAt.toISOString().split("T")[0],
      mood: entry.mood,
      stressLevel: entry.stressLevel || 0,
    }));

    res.status(200).json({ data: formatted });
  } catch (err) {
    console.error(" Error fetching mood history:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
