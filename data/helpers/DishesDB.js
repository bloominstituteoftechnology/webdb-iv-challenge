const db = require('../db');

module.exports = {
    getDishes: function () {
        return db('Dishes');
    },

    addDish: function (dish) {
        return db('Dishes').insert(dish);
    },

    getDish: async function (id) {
        const dish = db('Dishes').where('id', id);
        const recipes = db('Recipes').where('dish_id', id);
        const promises = [dish, recipes];
        return Promise.all(promises);
    },

    deleteDish: function (id) {
        return db('Dishes').where('id', id).del();
    },
}