const knex = require('knex');
const dbConfig = require('../../knexfile');

const db = knex(dbConfig.development);

module.exports = {
     addDish: function(dish) {
       return db('dish').insert(dish);
    },

    addRecipe: function(recipe) {
        return db('recipe').insert(recipe);
    }
}