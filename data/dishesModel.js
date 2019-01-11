const knex = require('knex');
const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);


function get(id){
    if(id){
        return db('dishes').where('id', id)
            .then(dish => {
                return dish[0]
            })
    }

    return db('dishes')
        .then(dishes => {
            return dishes
        })
}

function add(dish){
    return db('dishes').insert(dish)
        .then( ([id]) => this.get(id) )
}

module.exports = {
    get, add,
};


