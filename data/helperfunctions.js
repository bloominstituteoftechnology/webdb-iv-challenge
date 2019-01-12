const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getDishes: function() {
        return db("dishes");
    },
    addDish: function(dish) {
        return db("dishes")
            .insert(dish)
            .then(ids => ({ id: ids[0] }));
    },
    getDish: function(id) {
        if (id) {
            return db("dishes")
                .where("id", Number(id)).first();
        }
    },
    getRecipies: function() {
        return db("recipies");
    },
    addRecipie: function(recipie) {
        return db("recipies")
            .insert(dish)
            .then(ids => ({ id: ids[0] }));
    }
}