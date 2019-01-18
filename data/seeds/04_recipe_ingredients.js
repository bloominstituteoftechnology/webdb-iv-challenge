exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        { recipe_id: 1, ingredient_id: 1, amount: 1 },
        { recipe_id: 1, ingredient_id: 2, amount: 1.5 },
        { recipe_id: 1, ingredient_id: 3, amount: 1 },
        { recipe_id: 1, ingredient_id: 4, amount: 1 },
        { recipe_id: 1, ingredient_id: 5, amount: 1 },
        { recipe_id: 2, ingredient_id: 1, amount: 0.5 },
        { recipe_id: 2, ingredient_id: 3, amount: 1 },
        { recipe_id: 2, ingredient_id: 4, amount: 0.5 },
        { recipe_id: 2, ingredient_id: 5, amount: 0.25 },
        { recipe_id: 2, ingredient_id: 6, amount: 1 },
        { recipe_id: 2, ingredient_id: 7, amount: 1 },
        { recipe_id: 3, ingredient_id: 8, amount: 1 },
        { recipe_id: 3, ingredient_id: 9, amount: 1 },
        { recipe_id: 3, ingredient_id: 10, amount: 3 },
        { recipe_id: 3, ingredient_id: 11, amount: 0.5 },
        { recipe_id: 4, ingredient_id: 12, amount: 2 },
        { recipe_id: 4, ingredient_id: 13, amount: 1 },
        { recipe_id: 4, ingredient_id: 14, amount: 1 },
        { recipe_id: 4, ingredient_id: 7, amount: 1 },
        { recipe_id: 4, ingredient_id: 10, amount: 3 },
      ]);
    });
};
