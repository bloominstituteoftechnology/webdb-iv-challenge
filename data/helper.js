const knex = require('knex');

const knexConfig = require('./knexfile')

const db = knex(knexConfig.development);

module.exports = {
    getDishes: async () => {
        try {
            return await db('dishes');
        } catch(error) {
            return error
        }
    },
    addDish: async (dish) => {
        try {
            return await db('dishes').insert(dish)
        } catch(error) {
            return error
        }
    },
    getDish: async (id) => {
        try {
            return await db('dishes')
                .where('id', id)
                .innerJoin('recipes', 'recipes.dishes_id', 'dishes.id')
        } catch(error) {
            return error
        }
    },
    getRecipes: async () => {
        try {
            return await db('recipes')
                .innerJoin('dishes', 'recipes.dish_id', 'dishes.id' )
        } catch(error) {
            return error
        }
    },
    addRecipe : async (recipe) => {
        try {
            return await db('recipe').insert(recipe);
        } catch(error) {
            return error
        }
    }
}