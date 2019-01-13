const knex = require('knex');
const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);

const dishesDb = require('./dishesModel');

function get(id){
    if(id){
        return db('recipes').where('id', id)
            .then(dish => {
                return dish[0]
            })
    }

    return db('recipes')
        .then(dishes => {
            return dishes
        })
}

function add(dish){
    return db('recipes').insert(dish)
        .then( ([id]) => this.get(id) )
}

function getRecipes(id){
    if(id){
        return db('recipes').where('dish_id', id)
            .then(recipes => {
                return recipes
            })
    }
}

function getDishRecipes(id){
    if(id){
        return dishesDb.get(id).where('id', id)
            .then(dish => {
                getRecipes(id);
                return dish
            })
        }
}

module.exports = {
    get, add, getDishRecipes, getRecipes
};
