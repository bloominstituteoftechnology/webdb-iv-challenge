const knex = require("knex");

const knexConfig = require("./knexfile.js");

const db = knex(knexConfig.development);

module.exports = {
  getRecipes,
  addRecipe
};

function getRecipes() {
  return db("recipes")
    .join("dishes", "recipes.dish_id", "=", "dishes.id")
    .select("recipes.id", "recipes.name", "dishes.name as dish_name");
}

function addRecipe(recipe) {
  return db("recipes")
    .insert(recipe)
    .into("recipes");
}
