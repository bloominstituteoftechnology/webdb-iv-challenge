const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development);

module.exports = {
    getDishes
}

function getDishes(id) {
    if(id) {
       return db('dishes').where({dish_id: id}).first()
    }
    return db('dishes')
}