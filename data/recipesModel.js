const knex = require('knex');
const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);


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

module.exports = {
    get, add,
};


