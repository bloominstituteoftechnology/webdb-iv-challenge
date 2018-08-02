const db = require('../db');

module.exports = {
    get: id => {
        let query = db('dishes as d');

        if (id) {
            query
                .join('recipes as r', 'r.dish_id', 'd.id')
                .select('d.name as Dish', 'r.name as Recipes')
                .where('d.id', id);
        }
        return query;
    }
}