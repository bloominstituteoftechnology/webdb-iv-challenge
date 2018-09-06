
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients_in_recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients_in_recipe').insert([
        {id: 1, recipe_id: 1, ingredient_id: 1, quantity: '1'},
        {id: 2, recipe_id: 2, ingredient_id: 2, quantity: '1'},
        {id: 3, recipe_id: 3, ingredient_id: 3, quantity: '1'}
      ]);
    });
};
