const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = dishHelper = {

    getDishes() {
        return db('dishes')
    },

    addDish(dish) {
        return db('dishes')
            .insert({ dish })
            .returning('dishes.id')
    },

    getDish(id) {
        return db.select('dishes.id', 'dishes.dish', 'recipes.recipe')
            .from('dishes')
            .join('recipes', 'dishes.id', '=', 'recipes.dishes_id')
            .where('dishes.id', '=', id)
    }
};
