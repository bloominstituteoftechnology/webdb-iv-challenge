const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  getDish,
  addDish,
  addRecipe,
  getRecipes,
  updateDish,
  updateRecipe,
  removeDish,
  removeRecipe,
};

function getDishes() {
  return db('dish');
}

function getRecipes() {
    return db('recipes');
  }

function getDish(id) {
  return db('dish')
  .where({ id: Number(id) });
}

function addDish(dish) {
  return db('dish')
    .insert(dish)
    .then(ids => ({ id: ids[0] }));
}

function addRecipe(recipe) {
    return db('recipe')
      .insert(recipe)
      .then(ids => ({ id: ids[0] }));
  }

function updateDish(id, dish) {
  return db('dish')
    .where('id', Number(id))
    .update(dish);
}

function updateRecipe(id, recipe) {
    return db('recipe')
      .where('id', Number(id))
      .update(recipe);
  }

function removeDish(id) {
  return db('dish')
    .where('id', Number(id))
    .del();
}

function removeRecipe(id) {
    return db('recipe')
      .where('id', Number(id))
      .del();
  }
