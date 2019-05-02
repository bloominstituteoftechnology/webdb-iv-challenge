// db is a configured instance of knex that knows how to talk to the database
const db = require('../../data/dbConfig.js');

module.exports = {
  getDishes,
  getDish,
  addDish,
  getRecipies,
  addRecipe,
};


function getDishes() {
  return db('dishes');
}

function getDish(id) {
  return db('dishes')
    .where({ id })
    .first();
}

function addDish(dish) {
  return db('dishes')
    .insert(dish, 'id')
    .then(([id]) => {
      return findById(id);
    });
}

function getRecipies() {
  return db('recipies');
}

function addRecipe(recipe) {
  return db('recipies')
    .insert(recipe, 'id')
    .then(([id]) => {
      return findById(id);
    });
}
