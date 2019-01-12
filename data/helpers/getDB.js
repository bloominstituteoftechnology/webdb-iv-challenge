const knex = require('knex');
const dbConfig = require('../../knexfile');

const db = knex(dbConfig.development);

module.exports = {
     getDishes: function() {
        return db('dish');
    }
}
