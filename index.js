const express = require("express");

// Create server
const server = express();
const PORT = 3000;

// Middleware

// Start listening
server.get("/", (req, res) => {
  res.send("📚 Recipe book 📚");
});

server.listen(PORT, () => {
  console.log(`\n===== API Listening on http://localhost:${PORT} =====\n`);
});
