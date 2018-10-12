const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development);

function getRecipes() {
  return db.select('*').from('recipes');
}

function getRecipe(id) {
  return db.select('*').from('recipes').where('recipes.id', '=', id).first();
}

function addRecipe(recipe) {
  return db.insert(recipe).into('recipes');
}

function removeRecipe(id) {
  return db.select('*').from('recipes').where({id}).del();
}

function updateRecipe(id, recipe) {
  return db.select('*').from('recipes').where({id}).update(recipe);
}

function getRecipeWithIngredients(id) {
  return db.select('*').from('recipes').join('ingredients', 'ingredients.id', '>', 0).where('recipes.id', id);
}

function getRecipeWithInstructions(id) {
  return db.select('instructions.instruction_array as Array').from('recipes').join('instructions', 'instructions.recipe_id', '=', 'recipes.id').where('recipes.id', id)
}

module.exports = {
  getRecipes,
  addRecipe,
  getRecipe,
  removeRecipe,
  updateRecipe,
  getRecipeWithIngredients,
  getRecipeWithInstructions
}