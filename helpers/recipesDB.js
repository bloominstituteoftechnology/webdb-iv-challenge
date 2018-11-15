const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

module.exports = {
    getDishes: function(){
        return db('dishes')
    },
    addDish: function(dish){
        return db('dishes').insert(dish)
    },
    getDish: function(id){
        return db('dishes').where(id)
    },
    getRecipes: function(){
        return db('recipes');
    },
    addRecipe: function(recipe){
        return db('recipes').insert(recipe)
    }


}