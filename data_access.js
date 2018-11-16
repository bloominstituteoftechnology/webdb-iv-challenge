// getDishes(): should return a list of all dishes in the database.
// addDish(dish): should add the dish to the database and return the id of the new dish.
// getDish(id): should return the dish with the provided id and include a list of the related recipes.
// getRecipes(): should return a list of all recipes in the database including the dish they belong to.
// addRecipe(recipe): should add a recipe to the database and return the id of the new recip

const knex = require('knex')
const knexConfig = require('./knexfile.js')
const db = knex(knexConfig.development)

module.exports = {
    getDishes() {
        return db("dishes")
    },
    addDish(dish) {
        return db("dishes").insert(dish)
    },
    getDish(id) {
        return db("dishes as d")
        .join("recipes as r", "r.dish_id", "d.id")
        .where("d.id", id)
        .select("d.name", "r.name")
    },
    getRecipes() {
        return db("recipes")
    },
    addRecipe(recipe) {
        return db("recipes").insert(recipe)
    }
}