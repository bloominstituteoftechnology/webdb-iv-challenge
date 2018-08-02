const db = require('../data/db.js');

module.exports = {
    getDishes: function(id) {
        let query =db('dishes');

        return query;
    }

}