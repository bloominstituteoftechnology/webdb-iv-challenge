const knex = require('knex')
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)

module.exports = {
    getDishes,
    getDish,
    addDish,
    getRecipes,
    addRecipe,
}

//dishes
function getDishes() {
    return db('dishes')
}

function getDish(id) {
    return('dishes').where({ id: Number(id) })
}

function addDish(dish) {
    return db('dishes')
    .insert(dish)
    .then(ids => ({ id: ids[0] }))
}

//recipes
function getRecipes() {
    return db('recipes')
}
function addRecipe(recipe) {
    return db('recipes')
    .insert(recipe)
    .then(ids => ({ id: ids[0] }))
}

