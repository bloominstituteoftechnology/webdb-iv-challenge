const db = require('../data/dbConfig.js');

module.exports = {

  getRecipes: function() {
    return db('recipes as r')
      .join('dishes as d', 'd.id', 'r.dishId')
      .select('r.id', 'r.name', 'd.name as dishName', 'r.created_at')
  }
};