
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {id: 1, recipe_id: 1, ingredient_quantity: 2, ingredient_units: 'cups', ingredient_id: 1},
        {id: 2, recipe_id: 1, ingredient_quantity: 1, ingredient_units: 'cup', ingredient_id: 2},
      ]);
    });
};
