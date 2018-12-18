const express = require("express");
const configureMiddleware = require("./config/middleware");

const dishRoute = require("./routes/dishRoutes");
const recipeRoute = require("./routes/recipeRoutes");
const ingredientRoute = require("./routes/ingredientRoutes");
const instructionRoute = require("./routes/instructionRoutes");

// Create server
const server = express();
const PORT = 3000;

server.use("/api/dishes", dishRoute);
server.use("/api/recipes", recipeRoute);
server.use("/api/ingredients", ingredientRoute);
server.use("/api/instructions", instructionRoute);

// Middleware
configureMiddleware(server);

// Start listening
let date = Date();

server.get("/", (req, res) => {
  res.send("📚 Recipe book 📚");
});

server.listen(PORT, () => {
  console.log(`\n===== API Listening on http://localhost:${PORT} =====\n`);
  console.log(`===== Updated on ${date} =====\n`);
});
