
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
    return db('dish')
}

function addDish(dish) {
    return db("dish").insert(dish)

}

function getDish(id) {
    return db('dish as d')
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