const knex = require("knex");

const knexConfig = require("./knexfile.js");

const db = knex(knexConfig.development);

module.exports = {
  getRecipes,
  addRecipe
};

function getRecipes() {
  return db("recipes")
    .select("recipes.id", "recipes.name", "dishes.name as dish_name")
    .join("dishes", "recipes.dish_id", "=", "dishes.id");
}

function addRecipe(recipe) {
  return db("recipes")
    .insert(recipe)
    .into("recipes");
}
