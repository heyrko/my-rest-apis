const express = require("express");
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Define the Message class
class Message {
  constructor(content) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }
}

// GET route to return a simple message
app.get("/msg", (req, res) => {
  res.json({ message: "Hello, World!" });
});

// POST route to receive a message and return it
app.post("/msg", (req, res) => {
  if (!req.body.message) {
    return res.status(400).json({ error: "Message content is required" });
  }

  const newMessage = new Message(req.body.message);
  res.json({ receivedMessage: newMessage.getContent() });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
