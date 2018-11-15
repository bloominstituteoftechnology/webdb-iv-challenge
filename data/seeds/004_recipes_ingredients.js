
exports.seed = function(knex, Promise) {
  return knex("recipesIngredients")
  .truncate()
  .then(function () {
    return knex("recipesIngredients").insert([
      { recipe_id: 1, ingredient_id: 1, quantity: 5},
      { recipe_id: 1, ingredient_id: 2, quantity: 3.25},
      { recipe_id: 2, ingredient_id: 1, quantity: 7},
      { recipe_id: 2, ingredient_id: 3, quantity: 8},
      { recipe_id: 3, ingredient_id: 1, quantity: 12},
      { recipe_id: 3, ingredient_id: 4, quantity: 1.5},
      { recipe_id: 4, ingredient_id: 5, quantity: 0.25},
      { recipe_id: 4, ingredient_id: 6, quantity: 10},
      { recipe_id: 5, ingredient_id: 6, quantity: 10},
      { recipe_id: 5, ingredient_id: 7, quantity: 7},
      { recipe_id: 6, ingredient_id: 8, quantity: 4.5},
      { recipe_id: 6, ingredient_id: 9, quantity: 9.25},
      { recipe_id: 6, ingredient_id: 10, quantity: 14},
      { recipe_id: 7, ingredient_id: 8, quantity: 4.5},
      { recipe_id: 7, ingredient_id: 9, quantity: 9.25},
      { recipe_id: 7, ingredient_id: 11, quantity: 15},
      { recipe_id: 8, ingredient_id: 8, quantity: 4.5},
      { recipe_id: 8, ingredient_id: 9, quantity: 9.25},
      { recipe_id: 8, ingredient_id: 12, quantity: 21},
    ]);
  });
};
