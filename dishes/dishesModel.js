const knex = require("knex");

const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe,
  getShoppingList
};

function getDishes() {
  return db("dishes");
}

function getDish(id) {
  return db("dishes")
    .where({ id })
    .first();
}

function addDish(dish) {
  return db("dishes")
    .insert(dish)
    .into("dishes");
}

function getRecipes() {
  return db("recipes");
}

function addRecipe(recipe) {
  return db("recipes")
    .insert(recipe)
    .into("recipes");
}

function getShoppingList(id) {
  return db("Ingredients in Recipes")
    .join("recipes", "recipe_id", "Ingredients in Recipes.recipe_id")
    .select(
      "Ingredients in Recipes.quantity",
      "Ingredients in Recipes.ingredient"
    )
    .where("Ingredients in Recipes.recipe_id", id);
}
