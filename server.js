const express = require("express");
const DB = require("./data/helpers/helpers");
const SERVER = express();
const PORT = process.env.PORT || 3456;

SERVER.use(express.json());

// add a get request to all dishes
SERVER.get("/api/dishes", (req, res) => {
  DB.getDishes()
    .then(dishes => {
      // check that dishes is an object and contains some properties
      if (typeof dishes === "object" && dishes.length > 0) {
        res.json({ dishes });
      } else {
        res.status(400).json({ error: "Please check again, no dishes found." });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "Please check your connection and try again." });
    });
});

// get a dish by id
SERVER.get("/api/dishes/:id", (req, res) => {
  const { id } = req.params;

  DB.getDish(id)
    .then(dish => {
      // check if dish is an object and has a name present
      if (typeof dish === "object" && dish.name) {
        res.json({ dish });
      } else {
        res.status(400).json({ error: "No dish by that ID exists." });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "Please check your connection." });
    });
});

// add a dish
SERVER.post("/api/dishes", (req, res) => {
  const { dish } = req.body;

  DB.addDish(dish)
    .then(result => {
      // check if result is an array with a number
      if (typeof result === "object" && typeof result[0] === "number") {
        DB.getDish(result[0])
          .then(dish => {
            if (dish.name) {
              res.status(201).json({ dish });
            } else {
              res
                .status(400)
                .json({ error: "Dish was not created, try again" });
            }
          })
          .catch(err => {
            res.status(500).json({ error: err.response });
          });
      } else {
        res
          .status(401)
          .json({ error: "Please check your input and try again." });
      }
    })
    .catch(err => {
      res.status(500).json({ error: err.response });
    });
});

// update a dish
SERVER.put("/api/dishes/:id", (req, res) => {
  const { dish } = req.body;
  const { id } = req.params;

  DB.editDish(id, dish)
    .then(result => {
      if (result) {
        DB.getDish(id)
          .then(newDish => {
            if (newDish.name) {
              res.status(203).json({ newDish });
            } else {
              res.status(400).json({
                error: "Please check your input and try to edit dish again."
              });
            }
          })
          .catch(err => {
            res
              .status(500)
              .json({ error: "Check connection, error code: NOEDITGET" });
          });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "Please check your connection. ERROR code NOEDIT" });
    });
});

// get recipes
SERVER.get("/api/recipes", (req, res) => {
  DB.getRecipes()
    .then(recipes => {
      if (typeof recipes === "object" && recipes.length) {
        res.json({ recipes });
      } else {
        res.status(400).json({ error: "No recipes exist, try again later" });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: " Please check your connection, ERORR code NORECIPES" });
    });
});

// add a recipe
SERVER.post("/api/recipes", (req, res) => {
  const { recipe } = req.body;

  DB.addRecipe(recipe)
    .then(result => {
      if (result.length) {
        DB.getRecipe(result[0])
          .then(newRecipe => {
            res.status(201).json({ recipe: newRecipe });
          })
          .catch(err => {
            res.status(500).json({
              error: "Please check your connection. ERROR code NOEDIRECIP"
            });
          });
      } else {
        res
          .status(401)
          .json({ error: "Please check your input and submit again." });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "ERROR code NONEWREC" });
    });
});

// get a single recipe by id
SERVER.get("/api/recipes/:id", (req, res) => {
  const { id } = req.params;

  DB.getRecipe(id)
    .then(recipe => {
      if (!recipe) {
        res.status(400).json({ error: "recipe not found" });
      }
      res.json({ recipe });
    })
    .catch(err => {
      res.status(500).json({ error: "ERROR code NORECIDF" });
    });
});

SERVER.listen(PORT, () => {
  console.log(`Listening on PORT:${PORT}`);
});
