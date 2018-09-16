exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        {id: 1, recipe_id: 1, ingredient_id: 1, quantity: 1, unit_id: 1},
        {id: 2, recipe_id: 2, ingredient_id: 2, quantity: 1, unit_id: 2},
        {id: 3, recipe_id: 3, ingredient_id: 3, quantity: 1, unit_id: 3},
      ]);
    });
};