
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredient_id: 4, quantity: 1.4},
        {recipe_id: 1, ingredient_id: 6, quantity: 1},
        {recipe_id: 1, ingredient_id: 2, quantity: .75},
        {recipe_id: 2, ingredient_id: 1, quantity: 1.4},
        {recipe_id: 2, ingredient_id: 6, quantity: 1.2},
        {recipe_id: 2, ingredient_id: 2, quantity: .75},
        {recipe_id: 3, ingredient_id: 4, quantity: 1.4},
        {recipe_id: 3, ingredient_id: 6, quantity: 1},
        {recipe_id: 3, ingredient_id: 2, quantity: .75},
        {recipe_id: 4, ingredient_id: 1, quantity: 1.4},
        {recipe_id: 4, ingredient_id: 6, quantity: 1},
        {recipe_id: 4, ingredient_id: 5, quantity: .75},
        {recipe_id: 5, ingredient_id: 2, quantity: 1.4},
        {recipe_id: 5, ingredient_id: 6, quantity: 1},
        {recipe_id: 5, ingredient_id: 4, quantity: .75},
        {recipe_id: 6, ingredient_id: 5, quantity: 1.4},
        {recipe_id: 6, ingredient_id: 6, quantity: 1},
        {recipe_id: 6, ingredient_id: 1, quantity: .75},
        {recipe_id: 7, ingredient_id: 4, quantity: 1.4},
        {recipe_id: 7, ingredient_id: 6, quantity: 1},
        {recipe_id: 7, ingredient_id: 2, quantity: .75},
        {recipe_id: 8, ingredient_id: 4, quantity: 1.4},
        {recipe_id: 8, ingredient_id: 6, quantity: 1},
        {recipe_id: 8, ingredient_id: 2, quantity: .75},
        {recipe_id: 9, ingredient_id: 4, quantity: 1.4},
        {recipe_id: 9, ingredient_id: 3, quantity: 1},
        {recipe_id: 9, ingredient_id: 2, quantity: .75},
      ]);
    });
};
