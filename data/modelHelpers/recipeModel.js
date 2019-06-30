const knex = require("knex");
const knexConfig = require("../../knexfile.js");
const db = knex(knexConfig.development);

module.exports = knex(knexConfig.development);

module.exports = {
  getRecipes,
  getRecipe,
  addRecipe
};

function addRecipe(recipe) {
  return db.insert(recipe).into("recipes");
}

function getRecipes() {
  return db("dishes")
    .join("recipes", "dishes.id", "=", "recipes.dish_id")
    .select("dishes.dish_name", "recipes.recipe_name");
}

function getRecipe(recipeId) {
  return db("dishes")
    .join("recipes", "recipes.dish_id", "=", "dishes.id")
    .join(
      "recipe_ingredient",
      "recipe_ingredient.recipes_id",
      "=",
      "recipes.id"
    )
    .join(
      "ingredients",
      "recipe_ingredient.ingredient_id",
      "=",
      "ingredients.id"
    )
    .select(
      "dishes.dish_name",
      "recipes.id",
      "recipes.recipe_name",
      "recipes.directions",
      "recipe_ingredient.amount",
      "ingredients.ingredient_name"
    )
    .where("recipes.id", recipeId);
}
