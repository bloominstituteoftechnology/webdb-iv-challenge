const db = require('../data/db');


module.exports = {
    getDishes: () => {
       return db('dishes');
    }
}