const db = require('../data/dbConfig');

module.exports = {
    getDishes,
    getDish,
    addDish
};

function getDishes() {
    return db('dishes');
}

function getDish(id) {
    return db('dishes').where({ id }).first();
}

function addDish(dish) {
    return db('dishes')
        .insert(dish)
        .then(ids => ({ id: ids[0] }));
}
