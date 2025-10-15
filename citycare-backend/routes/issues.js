const router = require("express").Router();
const { createIssue, getIssues } = require("../controllers/issueController");
const multer = require("multer");
const jwt = require("jsonwebtoken");

// File upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

// Auth middleware
const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

// Routes
router.post("/", auth, upload.single("photo"), createIssue);
router.get("/", getIssues);

module.exports = router;
