const db = require('knex')(require('../../knexfile').development);

module.exports = {
  getDishes() {
    return db('dishes');
  },
};
