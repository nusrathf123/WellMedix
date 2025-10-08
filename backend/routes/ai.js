const express = require("express");
const router = express.Router();
const { OpenAI } = require("openai");

// ✅ Basic test route
router.get("/test", (req, res) => {
  res.send("AI route is working!");
});

// ✅ Setup OpenAI client (you can comment this for now if testing)
const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY, // or hardcode for testing
  baseURL: "https://openrouter.ai/api/v1",
});

// ✅ Chat route
router.post("/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ reply: "Message is required" });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "openai/gpt-4o-2024-08-06",
      messages: [{ role: "user", content: message }],
    });

    const reply = completion.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error("Chatbot Error:", err.message);
    res.status(500).json({ reply: "Oops! Something went wrong." });
  }
});

module.exports = router;
