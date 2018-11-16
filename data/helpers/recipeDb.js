const db = require("../cookbook.sqlite3");

module.exports = {
    getDishes: function() {
        return db("dishes");
    },

    addDish: function(dish) {
        return db("dishes")
            .insert(dish)
            .then(returnId => ({ id: returnId }));
    },

    getDish: function(id) {
        return db("dishes")
            .where("dishes.id", id)
            .then(dish => {
                let result = {
                    ...dish
                };
                db("recipes")
                    .where("recipes.dish_id", id)
                    .then(list => {
                        result.recipes = list;
                    })
                return result;
            });
    },

    getRecipes: function() {
        return db("recipes as r")
            .join("dishes as d", "r.dish_id", "d.id")
            .select("r.name", "d.name");
    },

    addDish: function(recipe) {
        return db("recipes")
            .insert(recipe)
            .then(returnId => ({ id: returnId }));
    }
}