exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipeIngredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipeIngredients").insert([
        { recipe_id: 1, ingredient_id: 1, ingredient_amount: 2 },
        { recipe_id: 1, ingredient_id: 3, ingredient_amount: 3 },
        { recipe_id: 1, ingredient_id: 4, ingredient_amount: 10 },
        { recipe_id: 2, ingredient_id: 2, ingredient_amount: 20 },
        { recipe_id: 2, ingredient_id: 3, ingredient_amount: 3 },
        { recipe_id: 2, ingredient_id: 4, ingredient_amount: 2 },
        { recipe_id: 3, ingredient_id: 5, ingredient_amount: 10 },
        { recipe_id: 3, ingredient_id: 7, ingredient_amount: 12 },
        { recipe_id: 4, ingredient_id: 6, ingredient_amount: 10 },
        { recipe_id: 4, ingredient_id: 7, ingredient_amount: 12 },
        { recipe_id: 5, ingredient_id: 3, ingredient_amount: 5 },
        { recipe_id: 5, ingredient_id: 8, ingredient_amount: 20 },
        { recipe_id: 5, ingredient_id: 9, ingredient_amount: 4 },
        { recipe_id: 5, ingredient_id: 10, ingredient_amount: 1000 }
      ]);
    });
};
