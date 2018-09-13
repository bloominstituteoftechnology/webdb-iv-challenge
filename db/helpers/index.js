const knex = require('knex');
const dbConfig = require('../../knexfile');
const db = knex(dbConfig.development);

module.exports = {
    getDishes: function (id) {
        let query = db('dishes');

        if (id) {
            return query
                .where('id', id)
                .first()
                .then(dish => dish); //return dish with matching id
        } else {
            return query.then(dishes => dishes) // return all dishes if no id
        }
    },

    addDish: function (dish) {
        return db('dish').insert(dish).then(id => this.getDishes(id));
    },

    getIngredients: function (id) {
        let query = db('ingredients');

        if (id) {
            return query
                .where('id', id)
                .first()
                .then(ingredient => ingredient); //return dish with matching id
        } else {
            return query.then(ingredients => ingredients) // return all dishes if no id
        }
    },

};