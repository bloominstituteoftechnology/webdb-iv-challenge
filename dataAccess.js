const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

//Is this the type of thing that we were supposed to do?

/*
    - `getDishes()`: should return a list of all dishes in the database.
    - `addDish(dish)`: should add the `dish` to the database and return the `id` of the new `dish`.
    - `getDish(id)`: should return the `dish` with the provided `id` and include a list of the related recipes.
    - `getRecipes()`: should return a list of all recipes in the database including the `dish` they belong to.
    - `addRecipe(recipe)`: should add a `recipe` to the database and return the `id` of the new `recipe`.
*/

function getDishes() {
    return db('dishes')
}

function addDishes(dish) {
    if(!dish){
        return("must have all fields")
    }else{
        return db('dishes')
        .insert(dish)
    }
}

function getDish(id){
    return db('dishes').where({id : id})
}

function getRecipes(){
    return db('recipes')
}

function addRecipe(recipe){
    if(!recipe){
        return("must have all fields included")
    }else{
        return db('dishes')
        .insert(recipe)
    }
}