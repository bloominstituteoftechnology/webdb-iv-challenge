const db = require('../data/db');

module.exports = {
    getDishes: function()  {
        let query = db('dishes');
       return query; 
    }
}