exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe-ingredients')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('recipe-ingredients').insert([
        { recipe_id: 1, ingredient_id: 1, quantity: 4 },
        { recipe_id: 1, ingredient_id: 2, quantity: 1 },
        { recipe_id: 1, ingredient_id: 3, quantity: 0.75 },
        { recipe_id: 1, ingredient_id: 4, quantity: 1 },
        { recipe_id: 1, ingredient_id: 5, quantity: 1 },
        { recipe_id: 1, ingredient_id: 6, quantity: 3 },
        { recipe_id: 1, ingredient_id: 7, quantity: 6 },
        { recipe_id: 1, ingredient_id: 8, quantity: 1 },
        { recipe_id: 1, ingredient_id: 9, quantity: 4 },
        { recipe_id: 1, ingredient_id: 10 }
      ]);
    });
};
