const knex = require('knex');
const knexConfig = require('./knexfile.js')
const db = knex(knexConfig.development);


// insert = (data) => {
//   db.insert(data).into('dishes').then(res => console.log(res))
// }


// insert({dish: 'thing'})
module.exports = {
  get: function(id) {
    let query = db('dishes');

    if (id) {
      return query
        .where('id', id)
        .first()
        .then(action => mappers.actionToBody(action));
    }

    return query.then(actions => {
      return actions.map(action => mappers.actionToBody(action));
    });
  },

  insert: function(dish) {
    return db('dishes')
      .insert(dish)
      .then(([id]) => console.log([id]));
  },


  getDishes: function() {
     return db.select('*').from('dishes')
       .then(response => console.log(response))
  },

  getDish: function(dishId) {
    return db.select('*').from('dishes').where({id: dishId})
      .then(res => console.log(res))

  },

  addRecipe: function(recipeData) {
    return db.insert(recipeData).into('recipes').then(res => console.log(res))

  },

  getRecipes: function() {
    return db.select('recipes.name as name', 'dishes.dish as dish').from('recipes').innerJoin('dishes', 'dishes.id', 'recipes.dish_id').then(res => console.log(res))

  },

  update: function(id, changes) {
    return db('')
      .where('id', id)
      .update(changes)
      .then(count => (count > 0 ? this.get(id) : null));
  },
  remove: function(id) {
    return db('')
      .where('id', id)
      .del();
  },
};

