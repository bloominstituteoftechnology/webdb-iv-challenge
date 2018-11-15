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
  return db("dishes")
    .insert(dish)
    .then(ids => ({ id: ids[0] }));
}

function getDish(id) {
  return db("dishes")
    .join("recipes", "dishes.id", "recipes.dish_id")
    .select("dishes.name", "recipes.name as recipes")
    .where("dishes.id", id);
}

function getRecipes() {
  return db("recipes")
    .join("dishes", "recipes.dish_id", "dishes.id")
    .select("recipes.name", "dishes.name as dish");
}

function addRecipe(recipe) {
  return db("recipes")
    .insert(recipe)
    .then(ids => ({ id: ids[0] }));
}
