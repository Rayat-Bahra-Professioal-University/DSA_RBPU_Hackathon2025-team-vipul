const mongoose = require("mongoose");

const IssueSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String, required: true },
  photo: { type: String },
  status: { type: String, enum: ["Pending", "Resolved"], default: "Pending" },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

module.exports = mongoose.model("Issue", IssueSchema);
