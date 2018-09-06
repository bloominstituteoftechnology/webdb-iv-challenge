const db = require('knex')(require('../../knexfile').development);

module.exports = {
  getDishes() {
    return db('dishes');
  },

  addDish(dish) {
    return db('dishes').insert(dish);
  },
};
