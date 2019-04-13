
exports.seed = function(knex, Promise) {
  return knex('ingredients').del()
    .then(function () {
      return knex('ingredients').insert([
        {recipeId: 1, name: 'tomatoes'},
        {recipeId: 1, name:'cheese'},
        {recipeId: 1, name:'pepperoni'}
      ]);
    });
  }