const db = require('../data/db.js');

module.exports = {
    getDishes: function() {
        let query = db('dishes');
        return query;
    },
}