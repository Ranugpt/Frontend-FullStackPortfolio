import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();
const JWT_SECRET = "your_jwt_secret_key"; // ⚠️ Store in .env file for security

// ================== REGISTER ==================
app.post("/api/register", (req, res) => {
  const { email, password } = req.body;
  const exists = users.find((u) => u.email === email);
  if (exists) {
    return res.status(400).json({ message: "User already exists" });
  }
  users.push({ email, password });
  res.json({ message: "Registration successful" });
});

// ================== LOGIN ==================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    // check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // generate JWT
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// ================== PROTECTED ROUTE (example) ==================
router.get("/profile", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    res.json(user);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

// Middleware to verify JWT
function verifyToken(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).json({ message: "No token provided" });

  jwt.verify(token.split(" ")[1], JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid token" });
    req.userId = decoded.id;
    next();
  });
}

app.post("/api/forgot-password", (req, res) => {
  const { email } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const tempPassword = Math.random().toString(36).slice(-8);
  user.password = tempPassword;

  console.log(`Temporary password for ${email}: ${tempPassword}`);
  res.json({
    message: "Temporary password sent to your email (simulated in console).",
  });
});

export default router;
