require("dotenv").config(); // ✅ Load .env variables
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Route to AI
const aiRoutes = require("./routes/ai");
app.use("/api/ai", aiRoutes);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
