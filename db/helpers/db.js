const db = require('../dbConfig.js');

module.exports = {
    getDishes: function(){
        return db('dishes')
    },

    addDish: function(dish) {
        return db('dishes').insert(dish)
    }
}