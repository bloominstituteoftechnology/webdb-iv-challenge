
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        // papa pizza
        {recipe_id: 1, ingredient_id: 10, quantity: 5},
        {recipe_id: 1, ingredient_id: 4, quantity: 4},
        {recipe_id: 1, ingredient_id: 6, quantity: 3},
        // domino pizza
        {recipe_id: 2, ingredient_id: 10, quantity: 5},
        {recipe_id: 2, ingredient_id: 6, quantity: 3},
        {recipe_id: 2, ingredient_id: 4, quantity: 10},
        // wonton soup
        {recipe_id: 3, ingredient_id: 5, quantity: 2},
        {recipe_id: 3, ingredient_id: 1, quantity: 3},
        {recipe_id: 3, ingredient_id: 5, quantity: 1},
        //boneless rib
        {recipe_id: 4, ingredient_id: 1, quantity: 5},
        {recipe_id: 4, ingredient_id: 3, quantity: 7},
        {recipe_id: 4, ingredient_id: 11, quantity: 3},
        // cheess pizza
        {recipe_id: 5, ingredient_id: 4, quantity: 5},
        {recipe_id: 5, ingredient_id: 3, quantity: 4},
        {recipe_id: 5, ingredient_id: 2, quantity: 5},
      ]);
    });
};
