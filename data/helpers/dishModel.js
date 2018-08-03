const db = require("../db");
const mappers = require("../helpers/mappers");

module.exports = {
    getDishes: function (id) {
        let query = db("dishes as d");

        if (id) {
            query.where("d.id", id).first();

            const promises = [query, this.getDishRecipes(id)];

            return Promise.all(promises).then(function (results) {
                let [dish, recipes] = results;
                dish.recipes = recipes;

                return mappers.dishToBody(dish);
            });
        }

        return query.then(dishes => {
            return dishes.map(dish => mappers.dishToBody(dish));
        });
    },
    getDishRecipes: function (dishesId) {
        return db("recipes")
            .where("dishes_id", dishesId)
            .then(recipes => recipes.map(recipe => mappers.recipeToBody(recipe)));
    },
    addDish: function (dish) {
        return db("dishes")
            .insert(dish)
            .then(([id]) => this.get(id));
    },
    update: function (id, changes) {
        return db("users")
            .where("id", id)
            .update(changes)
            .then(count => (count > 0 ? this.get(id) : null));
    },
    remove: function (id) {
        return db("users")
            .where("id", id)
            .del();
    }
};
