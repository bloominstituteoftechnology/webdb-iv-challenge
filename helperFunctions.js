const knex = require('knex');

const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipes,
    addRecipe
};

function getDishes() {
    return db('dishes');
}