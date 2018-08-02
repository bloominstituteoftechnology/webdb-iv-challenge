const db = require('../db');

module.exports = {
    get: id => {
        let query = db('dishes');

        if (id) {
            query.where('id', id).first();

            const promises = [query, db('recipes').where('dish_id', id)];

            return Promise.all(promises).then(results => {
                if (results[1].length > 0) {
                    let [dish, recipes] = results;
                    dish.recipes = recipes.map(r => r.name);

                    return dish;
                }
                return results[0];
            })
        }

        return query;
    }
}