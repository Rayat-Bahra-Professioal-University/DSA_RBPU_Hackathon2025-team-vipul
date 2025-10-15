const Issue = require("../models/Issue");

exports.createIssue = async (req, res) => {
  try {
    const { title, description, location } = req.body;
    const photo = req.file ? req.file.filename : null;
    const issue = await Issue.create({ title, description, location, photo, createdBy: req.user.id });
    res.status(201).json(issue);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getIssues = async (req, res) => {
  try {
    const issues = await Issue.find().populate("createdBy", "name email");
    res.json(issues);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
