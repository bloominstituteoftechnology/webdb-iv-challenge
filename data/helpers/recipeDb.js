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

    
}