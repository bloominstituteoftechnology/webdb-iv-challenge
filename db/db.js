const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe,
};

function getDishes() {
  return db('dishes');
}

function addDish(dish) {
  return db('dishes')
    .insert(dish)
}

// getRecipes: function(id) {
//     let query = db('recipes');

//     if (id) {
//         return query
//             .where('id', id)
//             .first()
//             .then(dish => dish);
//     }

//     return query
//     .join('dishes', 'recipes.dish_id', 'dishes.id')
//     .select('recipes.id', 'recipes.name', 'dishes.name as dish_type', 'recipes.dish_id', 'recipes.ingredients', 'recipes.instructions')
//     .then(recipes => {
//         return recipes;
//     });
// },

function getDish(id) {
  return db('dishes')
    .where('dishes.id', id)
    // .join('dishes', 'dish_id', 'dishes.id' )
    // .join('recipes', 'dish.id', 'recipes.dish_id')
    // .then(recipes => {
    //     return recipes
    // })
    .then(() => {
        return db('recipes')
            .where('dish_id', id)
    })
    // should return list of related recepies
    
}

function getRecipes() {
  return db('recipes')

}

function addRecipe(recipe) {
  return db('recipes')
    .insert(recipe)

}
