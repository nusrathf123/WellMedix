// backend/routes/exerciseRoutes.js
const express = require("express");
const router = express.Router();

// Sample exercise suggestions (you can later connect to a DB)
const exerciseSuggestions = [
  { id: 1, title: "Deep Breathing", type: "Relaxation", duration: "5 minutes" },
  { id: 2, title: "Stretching", type: "Physical", duration: "10 minutes" },
  { id: 3, title: "Yoga Flow", type: "Mind-Body", duration: "15 minutes" },
];

// GET: Fetch all exercise suggestions
router.get("/", (req, res) => {
  res.status(200).json({ data: exerciseSuggestions });
});

module.exports = router;
