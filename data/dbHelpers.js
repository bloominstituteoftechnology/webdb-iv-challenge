const knex = require('knex');
const dbConfig = require('../knexfile.js');

const db = knex(dbConfig.development);

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe
};

function getDishes() {
  return db("dishes");
}

function getDish(id) {
  return db("dishes")
    .join("recipes", "dishes.id", "=", "recipes.dish_id")
    .select("dishes.id", "dishes.dish_name", { recipe: "recipes.recipe_name" })
    .where({ "dishes.id": id })
}

function addDish(dish) {
  return db("dishes")
    .insert(dish)
}

function getRecipes() {
  return db("recipes")
    .join("dishes", "dishes.id", "=", "recipes.dish_id")
    .select({
        dish: "dishes.dish_name"
      },
      "recipes.id",
      "recipes.recipe_name",
      "recipes.instructions"
    );
}

function addRecipe(recipe) {
  return db("recipes")
    .insert(recipe)
    .then(ids => ids[0])
}