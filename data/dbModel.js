const knex = require("knex");

const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

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
