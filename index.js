const express = require("express");

// Routes
const DishRoutes = require("./Routes/DishRoutes.js");
const RecipeRoutes = require("./Routes/RecipeRoutes.js");

// Middleware
const server = express();
server.use(express.json());

// Routing
server.use("/dishes", DishRoutes);
server.use("/recipes", RecipeRoutes);

server.listen(8000, () => {
  console.log(`\n=== Web API Listening on http://localhost:8000 === \n`);
});
