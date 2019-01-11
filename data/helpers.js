const knex = require('knex')
const knexConfig = require('../../knexfile.js')
const db = knex(knexConfig.development)

module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipes,
    addRecipe

}

function getDishes() {
    return db('dishes')
}

function addDish(dish) {
    return db("dishes").insert(dish)

}

function getDish(id) {
    return db('dishes as d')
        .join("recipes as r", "r.dish_id", "d.id")
        .where("d.id", id)
        .select("d.dish_name", "r.recipe_name")
}

function getRecipes() {
    db("recipes")
}

function addRecipe(recipe) {
    return db("recipes").insert(recipe)
}