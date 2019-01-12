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
    }
}
