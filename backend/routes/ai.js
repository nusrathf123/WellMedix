const express = require("express");
const router = express.Router();
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY, 
  baseURL: "https://openrouter.ai/api/v1",
});

router.get("/motivation", async (req, res) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "openai/gpt-4o-2024-08-06", 
      messages: [
        {
          role: "user",
          content: "Give me a short motivational quote to reduce stress",
        },
      ],
    });

    const response = completion.choices[0].message.content;
    res.json({ quote: response });
  } catch (error) {
    console.error("AI Error:", error);
    res.json({ quote: "Keep going. You’re stronger than you think." });
  }
});

module.exports = router;
