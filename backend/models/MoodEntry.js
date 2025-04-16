const mongoose = require("mongoose");

const MoodEntrySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  mood: {
    type: String,
    required: true,
  },
  stressLevel: {
    type: Number,
    default: 0,
  },
  note: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("MoodEntry", MoodEntrySchema);
