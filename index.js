const express = require("express");
const knex = require("knex");

const knexConfig = require("./knexfile.js");

const db = knex(knexConfig.development);

const server = express();

const port = 9000;

server.use(express.json());

server.get("/api/shoppingList/:id", (req, res) => {
    const recipeId = req.params.id;
    console.log("This part is working");
    db("recipes")
        .join("recipe-ingredients", "recipes.id", "recipe-ingredients.recipe_id")
        .join("ingredients", "recipe-ingredients.ingredient_id", "ingredients.id")
        .join("dishes", "dishes.id", "recipes.dish_id")
        .select("dishes.name as Dish", "recipes.name as Recipe", "ingredients.name as Ingredient", "recipe-ingredients.ingredient_quantity")
        // .select("dishes.name", "recipe-ingredients.ingredient_quantity")
        .where("recipes.id", recipeId)
        .then(list => {
            if (list.length === 0) {
                res.status(404).json({ message: "The recipe with the specified ID does not exist." });
            } else {
                res.status(200).json(list);
            }
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});

server.listen(port, () => console.log(`\n== Port ${port} Running ==\n`));