
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipeIngredient').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipeIngredient').insert([
        {amount: '3 cups', recipe_id: 1, ingredient_id: 1 },
        {amount: '1 cup', recipe_id: 2, ingredient_id: 2},
        {amount: '1 cup', recipe_id: 3, ingredient_id: 3}, 
        {amount: '6 pcs', recipe_id: 4, ingredient_id: 4},
        {amount: '3.5 cups', recipe_id: 4, ingredient_id: 5},
        {amount: '.5 medium head', recipe_id: 4, ingredient_id: 6},
        {amount: '2 cups chopped', recipe_id: 4, ingredient_id: 7},
        {amount: '.5 cup', recipe_id: 5,  ingredient_id: 1 },
        {amount: '5 pcs', recipe_id: 5,  ingredient_id: 8 },
        {amount: '.25 cup', recipe_id: 6,  ingredient_id: 1 },
        {amount: '3 pcs', recipe_id: 6,  ingredient_id: 8 },
        {amount: '1.5 cup', recipe_id: 6,  ingredient_id: 9 },
      ]);
    });
};
