require('dotenv').config(); // This loads environment variables from the .env file

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(helmet()); // Security middleware
app.use(express.json()); // Allows parsing of JSON bodies

// Rate limiter middleware for the contact form
const contactFormLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes window
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later."
});

// Debugging: Check if MongoDB URI is being loaded correctly from .env
console.log('MongoDB URI:', process.env.MONGODB_URI);

// Database connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));

// Define the schema
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});
const Message = mongoose.model("Message", messageSchema);

// Simple email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// API route to handle contact form submissions with rate limiting
app.post("/api/contact", contactFormLimiter, async (req, res, next) => {
  try {
    // Log the incoming request data
    console.log('Request body:', req.body);

    const { name, email, message } = req.body;

    // Validate the fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    } else if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const newMessage = new Message({ name, email, message });

    // Save message to MongoDB
    await newMessage.save();
    res.status(200).json({ message: "Message received successfully" });
  } catch (error) {
    console.error("Error while handling the request:", error);
    next(error); // Forward error to global error handler
  }
});

// Root endpoint
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error("Internal Server Error:", err.stack);
  res.status(500).json({ message: "An internal server error occurred" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
// Root endpoint test
app.get("/test-db", async (req, res) => {
    try {
      const testMessage = new Message({ name: "Test User", email: "test@example.com", message: "This is a test message" });
      await testMessage.save();
      res.send("Message saved to MongoDB successfully");
    } catch (error) {
      console.error("Error while saving test message:", error);
      res.status(500).send("Error while saving test message");
    }
  });
  