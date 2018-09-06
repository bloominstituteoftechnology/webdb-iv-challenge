
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        {quantity: 1, recipe_id: 1, ingredients_id: 1},
        {quantity: 2, recipe_id: 2, ingredients_id: 1},
        {quantity: 3, recipe_id: 3, ingredients_id: 2},
        {quantity: 1, recipe_id: 4, ingredients_id: 2},
        {quantity: 2, recipe_id: 5, ingredients_id: 3},
        {quantity: 3, recipe_id: 6, ingredients_id: 4}
      ]);
    });
};
