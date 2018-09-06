const db = require('../dbConfig.js');

module.exports = {
  getDishes: function() {
    return db('dishes');
  },

  getDish: function(id) {
    let dish = db('dishes as d')
      .where('d.id', id)
      .first();
    let recipes = db('recipes as r')
      .select('r.name')
      .where('r.dish_id', id);

    const promises = [dish, recipes];

    return Promise.all(promises).then(results => {
      console.log(results);
      let [dish, recipes] = results;
      dish.recipes = recipes.map(recipe => recipe.name);
      console.log(recipes);
      return dish;
    });
  },

  addDish: function(dish) {
    return db('dishes').insert(dish);
  },
};
