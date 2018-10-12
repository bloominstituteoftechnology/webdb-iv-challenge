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

module.exports = {
  getRecipes,
  addRecipe,
  getRecipe,
  removeRecipe,
  updateRecipe
}