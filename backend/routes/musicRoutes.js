// backend/routes/musicRoutes.js
const express = require("express");
const router = express.Router();

// Sample music suggestions (you can replace this with a database later)
const musicSuggestions = [
  { id: 1, title: "Relaxing Piano", artist: "Calm Beats", genre: "Instrumental" },
  { id: 2, title: "Lo-Fi Chill", artist: "LoSound", genre: "Lo-Fi" },
  { id: 3, title: "Nature Sounds", artist: "Nature Bliss", genre: "Ambient" },
];

// GET: Fetch all music suggestions
router.get("/", (req, res) => {
  res.status(200).json({ data: musicSuggestions });
});

module.exports = router;
