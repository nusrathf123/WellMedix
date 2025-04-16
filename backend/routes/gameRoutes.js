// backend/routes/gameRoutes.js
const express = require("express");
const router = express.Router();

// Sample mini-game suggestions (can be expanded or fetched from DB)
const gameSuggestions = [
  { id: 1, name: "Memory Match", type: "Brain", duration: "5-10 minutes" },
  { id: 2, name: "Reaction Timer", type: "Focus", duration: "2-5 minutes" },
  { id: 3, name: "Breathing Bubble", type: "Relaxation", duration: "3 minutes" },
];

// GET: Fetch all game suggestions
router.get("/", (req, res) => {
  res.status(200).json({ data: gameSuggestions });
});

module.exports = router;
