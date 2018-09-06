const db = require('../dbConfig.js');

module.exports = {
  get: function(id) {
    let query = db('dishes as d');

    if(id){
      const promises = [query, this.getDishRecipes(id)];

      return Promise.all(promises).then(function(results) {
        let [dishes, recipes] = results;
        let dish = dishes[0];
        dish.recipes = recipes.map(r => Object.assign({}, { id: r.id, name: r.name }));

        return dish;
      });
    }

    return query;
  }, //get's all dishes, or dish by id if provided
  getDishRecipes: function(dishId) {
    return db('recipes')
            .where({ dish_id: dishId})
  },
  insert: function(dish) {
    return db('dishes')
            .insert(dish)
            .then(ids => ({ id: ids[0] }));
  },
};
