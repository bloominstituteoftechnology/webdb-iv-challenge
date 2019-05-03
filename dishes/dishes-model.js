const db = require('../data/dbConfig');

module.exports = {
    getDishes,
    addDish,
};

function getDishes() {
    return db('dishes');
}

function addDish(dish) {
    return db('dishes')
        .insert(dish)
        .then(ids => ({ id: ids[0] }));
}