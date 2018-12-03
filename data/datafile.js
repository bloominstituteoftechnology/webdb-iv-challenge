const knex = require('knex');

const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  getDish,
  addDish,
  getRecipes,
};

function getDishes() {
  return db('dishes')
}

function getDish(id) {
  return db('dishes')
        .where({ id: Number(id) });
}

function addDish(dish) {
  return db('dishes')
        .insert(dish)
        //.returning('dish') //doesnt work in sqlite3
        .then(ids => {id: ids[0]} )
}

function getRecipes() {
  return db('recipes')
}

