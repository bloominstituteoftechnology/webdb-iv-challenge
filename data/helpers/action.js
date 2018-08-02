const db = require('../db.js');

module.exports = {
    getDishes: function(id) {
        let query = db('dishes as d');

        return query;
    }
}