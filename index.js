//dependency imports
const express = require("express");

//in-app imports
const db = require("./data/db");

//init server
const server = express();

//middleware
server.use(express.json());

//endpoints
server.get("/", (req, res) => {
  res.json({ server: "listening" });
});

//get all dishes in database
server.get("/api/dishes", (req, res) => {
  db.getDishes()
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(err => res.status(500).json({ error: "Couldn't retrieve dishes." }));
});

//add dish to database
server.post("/api/dishes", (req, res) => {
  const dish = req.body;
  if (!dish.name) {
    res.status(400).json({ message: "You have to name your dish something." });
  } else {
    db.addDish(dish)
      .then(id => res.status(201).json(id))
      .catch(err => res.status(500).json({ error: "Couldn't add dish." }));
  }
});

//get dish by id, along with it's related recipes
server.get("/api/dishes/:id", (req, res) => {
  const { id } = req.params;
  db.getDish(id)
    .then(dish => res.status(200).json(dish))
    .catch(err => res.status(500).json({ error: "Could not retrieve dish." }));
});

//get all recipes along with dish they belong to
server.get("/api/recipes", (req, res) => {
  db.getRecipes()
    .then(recipes => res.status(200).json(recipes))
    .catch(err =>
      res.status(500).json({ error: "Couldn't retrieve recipes." })
    );
});

//add recipe and return the new recipe id
server.post("/api/recipes", (req, res) => {
  const recipe = req.body;
  if (!recipe.name || !recipe.dish_id) {
    res.status(400).json({
      message: "Please submit a name and dish ID for the new recipe."
    });
  } else {
    db.getDish(recipe.dish_id)
      .then(dish => {
        if (!dish || !dish.length) {
          res
            .status(404)
            .json({ message: "No dish with that dish_id exists." });
        } else {
          db.addRecipe(recipe)
            .then(id => res.status(200).json(id))
            .catch(err =>
              res.status(500).json({ error: "Could not save the new recipe." })
            );
        }
      })
      .catch(err =>
        res
          .status(500)
          .json({ error: "Could not verify existence of the associated dish." })
      );
  }
});

server.listen(7000, () =>
  console.log("\n===Server listening on port 7000===\n")
);
