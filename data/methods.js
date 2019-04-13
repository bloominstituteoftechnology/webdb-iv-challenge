const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

module.exports = {
    getDishes: () => {
        return db('dishes')
    },
    addDish: dish => {
        return db('dishes').insert(dish)
    },
    getDish: id => {
        return db('dishes')
            .where({ 'dishes.id': id })
            .join('recipes', { 'dishes.id': 'recipes.dishId' })
            .select('recipes.name as recipe', 'dishes.name as dish')
    },
    getRecipes: () => {
        return db('recipes')
            .join('dishes', { 'dishes.id': 'recipes.dishId' })
            .select('recipes.id', 'recipes.name as recipe', 'dishes.name as dish')
    },
    addRecipe: recipe => {
        return db('recipes').insert(recipe)
    },
    getIngredients: () => {
        return db('ingredients')
    },
    getRecipe: id => {
        return db('recipeIngredientsMap')
            .where({ 'recipeIngredientsMap.recipeId': id })
            .join('recipes', { 'recipeIngredientsMap.recipeId': 'recipes.id' })
            .join('dishes', { 'recipes.dishId': 'dishes.id' })
            .leftJoin('ingredients', { 'recipeIngredientsMap.ingredientId': 'ingredients.id' })
            .select('dishes.name as dish', 'recipes.name as recipe', 'ingredients.name as ingredients', 'recipeIngredientsMap.quantity as quantity')
    }
}