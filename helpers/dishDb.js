const db = require('../data/db.js');

module.exports = {
    getDishes: function(id) {
        let query =db('dishes');

        return query;
    },

    update: function(id, dish) {
        return db('dishes')
          .where('id', id)
          .update(dish);

    },

    getDish: function(id) {
        return db('dishes')
        .where({ id: Number(id) });
    }

    

    

}