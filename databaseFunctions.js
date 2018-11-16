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

  insertDish: function(dish) {
    return db('dishes')
      .insert(dish)
      .then(([id]) => console.log([id]));
  },


  // getDishes: function() {
  //    return db.select('*').from('dishes')
  //      .then(response => console.log(response))
  // },

  getDish: function(dishId) {
    if(dishId) {
      db.select('dishes.dish')
        .from('dishes')
        .where('dishes.id', dishId)
        .then(dish => {
          return db.select('recipes.name')
            .from('recipes')
            .where('recipes.dish_id', dishId)
            .then(res => console.log([dish, res]))
        })
      // return db.select('dishes.dish as dish', 'recipes.name as recipe').from('dishes')
      //   .innerJoin('recipes', 'dishes.id', 'recipes.dish_id')
      //   .where('dishes.id', dishId)
      //   .groupBy('dishes.dish')
        // .then(res => console.log(res))
    } else {
       return db.select('*').from('dishes')
         .then(response => console.log(response))
    }

  },

  addRecipe: function(recipeData) {
    return db.insert(recipeData).into('recipes').then(res => console.log(res))

  },

  getRecipes: function() {
    return db.select('recipes.name as name', 'dishes.dish as dish')
      .from('recipes')
      .innerJoin('dishes', 'dishes.id', 'recipes.dish_id')
      .then(res => console.log(res))
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

