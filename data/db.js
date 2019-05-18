//import knex and initialize database
const knex = require("knex");
const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

//export all custom functions on the various tables
module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe
};

//custom functions
function getDishes() {
  return db("dishes");
}

function addDish(dish) {
  return db("dishes").insert(dish);
}

function getDish(id) {
  return db("dishes")
    .join("recipes", "dishes.id", "recipes.dish_id")
    .select("dishes.name as dish", "recipes.name as recipe")
    .where("dishes.id", id);
}

function getRecipes() {
  return db("recipes")
    .join("dishes", "recipes.dish_id", "dishes.id")
    .select("recipes.name as recipe", "dishes.name as dish");
}

function addRecipe(recipe) {
  return db("recipes").insert(recipe);
}
