
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe-ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe-ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, ingredient_quantity: 4},
        {recipe_id: 3, ingredient_id: 2, ingredient_quantity: 7},
        {recipe_id: 4, ingredient_id: 3, ingredient_quantity: 1},
      ]);
    });
};
