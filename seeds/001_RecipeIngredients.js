
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipeIngredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipeIngredients').insert([
        {recipe_id: 1, ingredient_id: 1, ingredient_quantity: 1},
        {recipe_id: 1, ingredient_id: 5, ingredient_quantity: 3.5},
        {recipe_id: 2, ingredient_id: 3, ingredient_quantity: 5},
        {recipe_id: 2, ingredient_id: 4, ingredient_quantity: 2},
        {recipe_id: 3, ingredient_id: 2, ingredient_quantity: 2},
        {recipe_id: 4, ingredient_id: 4, ingredient_quantity: 1},
        {recipe_id: 4, ingredient_id: 5, ingredient_quantity: 3},
        {recipe_id: 5, ingredient_id: 5, ingredient_quantity: 1},
      ]);
    });
};
