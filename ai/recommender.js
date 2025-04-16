const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://openrouter.ai/api/v1", 
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:3000", 
    "X-Title": "WellMedix", 
  },
});

async function getMotivationQuote() {
  try {
    const completion = await openai.chat.completions.create({
      model: "openrouter/auto", 
      messages: [
        {
          role: "user",
          content: "Give me a short motivational quote to reduce stress.",
        },
      ],
      max_tokens: 100, 
    });

    console.log(" Raw API Response:", completion);

    const response = completion.choices?.[0]?.message?.content;
    if (response) {
      console.log("AI Response:", response);
    } else {
      console.log(" AI did not return a valid response. Showing fallback.");
      console.log(" Fallback: 'Keep going. You’re stronger than you think.'");
    }
  } catch (error) {
    console.error("Error:", error.message || error);
    console.log(" Fallback: 'Every day may not be good, but there is good in every day.'");
  }
}

getMotivationQuote();
