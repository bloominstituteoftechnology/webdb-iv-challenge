
exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 2},
        {recipe_id: 1, ingredient_id: 2, quantity: 4},
        {recipe_id: 1, ingredient_id: 3, quantity: 5},
        {recipe_id: 1, ingredient_id: 4, quantity: 2},
        {recipe_id: 1, ingredient_id: 5, quantity: 8},
        {recipe_id: 1, ingredient_id: 6, quantity: 3},
        {recipe_id: 2, ingredient_id: 6, quantity: 9},
        {recipe_id: 2, ingredient_id: 7, quantity: 10},
        {recipe_id: 2, ingredient_id: 8, quantity: 6},
        {recipe_id: 2, ingredient_id: 9, quantity: 9},
        {recipe_id: 2, ingredient_id: 10, quantity: 11},
        {recipe_id: 2, ingredient_id: 11, quantity: 21},
        {recipe_id: 2, ingredient_id: 12, quantity: 9},
        {recipe_id: 3, ingredient_id: 7, quantity: 5},
        {recipe_id: 3, ingredient_id: 13, quantity: 7},
        {recipe_id: 3, ingredient_id: 14, quantity: 3},
        {recipe_id: 3, ingredient_id: 15, quantity: 2},
        {recipe_id: 3, ingredient_id: 16, quantity: 1},
        {recipe_id: 3, ingredient_id: 17, quantity: 8},
        {recipe_id: 3, ingredient_id: 18, quantity: 5},
        {recipe_id: 3, ingredient_id: 19, quantity: 7}
      ]);
};
