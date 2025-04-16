const mongoose = require("mongoose");

const MoodEntrySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // We'll link this to the User later
    required: true,
    ref: "User",
  },
  mood: {
    type: String,
    required: true,
    enum: ["stressed","very bad","Bad","Boring","Happy","peacefull"],
  },
  note: {
    type: String,
    default: "",
  },
  stressLevel: {
    type: Number, // Example: 0–100
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("MoodEntry", MoodEntrySchema);
