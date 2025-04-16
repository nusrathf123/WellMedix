const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const moodRoutes = require("./routes/moodRoutes");
const authRoutes = require("./routes/authRoutes.js");
const tipsRoutes = require("./routes/tipsRoutes");
const musicRoutes = require("./routes/musicRoutes");
const exerciseRoutes = require("./routes/exerciseRoutes");
const gameRoutes = require("./routes/gameRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); 
app.get("/", (req, res) => {
  res.send("WellMedix Backend is Running ");
});
app.use("/api/moods", moodRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/tips", tipsRoutes);
app.use("/api/music", musicRoutes);
app.use("/api/exercises", exerciseRoutes);
app.use("/api/games", gameRoutes);
app.use("/api/dashboard", dashboardRoutes);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error(" MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});
