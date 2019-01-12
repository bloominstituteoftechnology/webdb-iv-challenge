const knex = require('knex');
const dbConfig = require('../../knexfile');

const db = knex(dbConfig.development);

module.exports = {
     getDishes: function(id) {
        if(id === undefined) {
            return db('dish');
        } else {
            return db('dish').where('id', id);
        }
    },

    getRecipes: function() {
        return db('recipe')
            .join('dish', 'recipe.id', '=', 'dish.id')
            .select('dish.id', 'dish.name as dish_name', 'recipe.name as recipe_name')
    }
}
