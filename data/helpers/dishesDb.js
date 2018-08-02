const db = require('../db');

module.exports = {
    getDishes: () => {
        return db('dishes');
    },
    getDish: id => {
        let query = db('dishes').where('id', id).first();

        const promises = [query, db('recipes').where('dish_id', id)];

        return Promise.all(promises).then(results => {
            if (results[1].length > 0) {
                let [dish, recipes] = results;
                dish.recipes = recipes.map(r => r.name);

                return dish;
            }
            return results[0];
        })
    },
    addDish: dish => {
        return db('dishes').insert(dish).then(ids => ({ id: ids[0] }));
    }
}