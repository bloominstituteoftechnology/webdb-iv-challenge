const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

function getDishes() {
    return db('dishes')
}

function addDishes(dishes) {
    return db('dishes').insert(dish)
}