const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getDishes,
    getDish,
    addDish,
    getRecipe,
    addRecipe,
};

function getDishes(){
    return db.select('name').from('dishes')
}

function getDish(id){
    return db.select('name').from('dishes').where({id:id})
}