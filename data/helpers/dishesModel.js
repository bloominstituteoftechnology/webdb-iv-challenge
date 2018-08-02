const db = require('../db');

module.exports = {
    getDishRecipes: function (dishId) {
        return db('recipes')
            .where({ 'dish_id': dishId })
            .then(recipes => {return recipes})
    },

    get: function (id) {
        let query = db('dishes')

        if (id) {
            return query
                .leftJoin('recipes', 'recipes.dish_id', 'dishes.id')
                .where('dishes.id', id)
                .then(dish => {
                    return dish
                })
        }
        return query.then(dishes => {
            return dishes;
        })
    }
}