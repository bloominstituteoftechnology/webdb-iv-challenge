const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = dishHelper = {

    getDishes() {
        return db('dishes')
    },

    addDish(dish) {
        return db('dishes')
            .insert({ dish })
            .then(([id]) => this.get(id))
    },

    getDish(id) {
        return db.select('dish')
            .from('dishes')
            .where('id', id)
    }
};
