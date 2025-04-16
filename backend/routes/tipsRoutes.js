const express = require("express");
const router = express.Router();

// Static list of wellness tips and recommendations
const tips = [
  {
    type: "quote",
    content: "Keep breathing. You're doing better than you think.",
  },
  {
    type: "tip",
    content: "Take a 5-minute break and stretch your body.",
  },
  {
    type: "music",
    content: "Try listening to calming instrumental music or nature sounds.",
  },
  {
    type: "exercise",
    content: "Do a 2-minute walk or 10 jumping jacks to reset your focus.",
  },
  {
    type: "game",
    content: "Take a short break with a fun puzzle or memory game.",
  },
];

// GET route to return all tips
router.get("/", (req, res) => {
  res.status(200).json({ tips });
});

module.exports = router;
