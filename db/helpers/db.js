const db = require('../dbConfig.js');

module.exports = {
    getDishes: function(){
        return db('dishes')
    },

    addDish: function(dish) {
        return db('dishes').insert(dish)
    },

    getDish: function(id){
        return db('dishes').join('recipes', 'recipes.dish_id', 'dishes.id').where({'dishes.id': id})
    }
}