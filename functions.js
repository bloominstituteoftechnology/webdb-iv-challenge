const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

module.exports = knex(knexConfig.development);

module.exports = {
  getDishes,
  getDish,
  getRecipes,
  getRecipe,
  addDish,
  addRecipe
}

function getDishes() {
  return db('dishes').select('*')
}

function getDish(id) {
  return db('dishes')
    .join('recipes', 'dishes.id', '=', 'recipes.dish_id')
    .select('dishes.dish_name', 'recipes.recipe_name')
    .where('recipes.dish_id', id)
}

function getRecipes() {
  return db('dishes')
    .join('recipes', 'dishes.id', '=', 'recipes.dish_id')
    .select('dishes.dish_name', 'recipes.recipe_name')
}

function getRecipe(id) {
  return db('dishes')
    .join('recipes', 'recipes.dish_id', '=', 'dishes.id')
    .join('recipe_ingredients', 'recipe_ingredients.recipes_id', '=', 'recipes.id')
    .join('ingredients', 'recipe_ingredients.ingredient_id', '=', 'ingredients.id')
    .select('dishes.dish_name', 'recipes.id', 'recipes.recipe_name', 'recipes.directions', 'recipe_ingredients.amount', 'ingredients.ingredient_name')
    .where('recipes.id', id)
}


function addDish(dish) {
  return db.insert(dish).into('dishes')
}

function addRecipe(recipe) {
  return db.insert(recipe).into('recipes')
}
