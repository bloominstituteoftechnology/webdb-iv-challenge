
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('association_recipes_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('association_recipes_ingredients').insert([
        {id: 1, recipe_id: 1, ingredient_id: 1, quantity: '600g'},
        {id: 2, recipe_id: 5, ingredient_id: 1, quantity: '600g'},
        {id: 3, recipe_id: 6, ingredient_id: 2, quantity: '50g'},
      ]);
    });
};
