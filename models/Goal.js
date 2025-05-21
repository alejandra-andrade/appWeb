const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
  title: String,
  description: String,
  dueDate: Date,
});

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;
