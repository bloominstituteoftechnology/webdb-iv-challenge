const db = require('../data/dbConfig');

module.exports = {
    getDishes,
};

function getDishes() {
    return db('tracks');
}