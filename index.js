const express = require("express");
const helmet = require("helmet");
const dbhelpers = require("./dbhelpers/helpers");


const server = express();

server.use(express.json());
server.use(helmet());

server.get("/api/dishes", async (req, res) => {
  try {
    const results = await dbhelpers.getDishes();
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json(err);
  }
});
server.get("/api/dishes/:id", async (req, res) => {
  try {
    const results = await dbhelpers.getDish(req.params.id);
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json(err);
  }
});

server.get("/api/recipes", async (req, res) => {
  try {
    const results = await dbhelpers.getRecipes(req.params.id);
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json(err);
  }
});


server.post("/api/dishes", async (req, res) => {
  if (!req.body.dish_name) {
    res.status(400).json({ errorMessage: "Invalid body" });
  }
  try {
    const results = await dbhelpers.addDish(req.body);
    res.status(200).json({ results });
  } catch (err) {
    res.status(500).json(err);
  }
});

server.post("/api/recipes", async (req, res) => {
  if (!req.body.recipe_name||!req.body.dish_id) {
    res.status(400).json({ errorMessage: "Invalid body" });
  }
  try {
    const results = await dbhelpers.addRecipe(req.body);
    res.status(200).json({ results });
  } catch (err) {
    res.status(500).json(err);
  }
});



server.use("/", (req, res) =>
  res
    .status(404)
    .json({ errorMessage: "You probably want to use a different endpoint" })
);

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});