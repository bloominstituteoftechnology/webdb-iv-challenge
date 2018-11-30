const knex = require('knex');
const knexconfig = require('../../knexfile.js');
const db = knex(knexconfig.development);



module.exports = {
    getDishes: () => {
        return db('dishes')
    },
    addDish: (dish) => {
        return db('dishes')
        .insert(dish)
     },
    getDish: (id) => {
        return db('dishes')
        .join('recipes', {'dishes.id': 'recipes.dish_id'})
        .select('dishes.name as dish', 'recipes.name as recipe')
        .where({ 'dishes.id': id })
    },
    getRecipes: () => {
        return db('recipes')
        .join('recipes', {'dishes.id': 'recipes.dish_id'})
        .select('recipes.id', 'recipes.name as recipe', 'dishes.name as dish')
    },
    addRecipe: (recipe) => {
        return db('recipes').insert(recipe)
    }
}