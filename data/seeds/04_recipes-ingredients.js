exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes_ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes_ingredients").insert([
        { recipe_id: 1, ingredient_id: 1, quantity: 1 },
        { recipe_id: 1, ingredient_id: 3, quantity: 1 },
        { recipe_id: 1, ingredient_id: 4, quantity: 1 },
        { recipe_id: 1, ingredient_id: 5, quantity: 1 },
        { recipe_id: 1, ingredient_id: 6, quantity: 5 },
        { recipe_id: 1, ingredient_id: 7, quantity: 3 },
        { recipe_id: 1, ingredient_id: 8, quantity: 2 },
        { recipe_id: 1, ingredient_id: 9, quantity: 2 },
        { recipe_id: 1, ingredient_id: 10, quantity: 4 },
        { recipe_id: 1, ingredient_id: 11, quantity: 1 },
        { recipe_id: 1, ingredient_id: 12, quantity: 2 },
        { recipe_id: 2, ingredient_id: 2, quantity: 1 },
        { recipe_id: 2, ingredient_id: 3, quantity: 1 },
        { recipe_id: 2, ingredient_id: 4, quantity: 1 },
        { recipe_id: 2, ingredient_id: 6, quantity: 4 },
        { recipe_id: 2, ingredient_id: 7, quantity: 3 },
        { recipe_id: 2, ingredient_id: 8, quantity: 1 },
        { recipe_id: 2, ingredient_id: 9, quantity: 2 },
        { recipe_id: 2, ingredient_id: 10, quantity: 3 },
        { recipe_id: 2, ingredient_id: 12, quantity: 2 },
        { recipe_id: 2, ingredient_id: 13, quantity: 2 },
        { recipe_id: 3, ingredient_id: 1, quantity: 1 },
        { recipe_id: 3, ingredient_id: 6, quantity: 2 },
        { recipe_id: 3, ingredient_id: 9, quantity: 3 },
        { recipe_id: 3, ingredient_id: 19, quantity: 1 },
        { recipe_id: 3, ingredient_id: 20, quantity: 1 },
        { recipe_id: 3, ingredient_id: 22, quantity: 1 },
        { recipe_id: 3, ingredient_id: 35, quantity: 1 },
        { recipe_id: 3, ingredient_id: 40, quantity: 1 },
        { recipe_id: 3, ingredient_id: 41, quantity: 6 },
        { recipe_id: 3, ingredient_id: 42, quantity: 6 },
        { recipe_id: 3, ingredient_id: 44, quantity: 6 },
        { recipe_id: 4, ingredient_id: 1, quantity: 1 },
        { recipe_id: 4, ingredient_id: 6, quantity: 3 },
        { recipe_id: 4, ingredient_id: 10, quantity: 2 },
        { recipe_id: 4, ingredient_id: 12, quantity: 3 },
        { recipe_id: 4, ingredient_id: 13, quantity: 2 },
        { recipe_id: 4, ingredient_id: 19, quantity: 1 },
        { recipe_id: 4, ingredient_id: 20, quantity: 1 },
        { recipe_id: 4, ingredient_id: 22, quantity: 2 },
        { recipe_id: 4, ingredient_id: 28, quantity: 2 },
        { recipe_id: 4, ingredient_id: 35, quantity: 1 },
        { recipe_id: 4, ingredient_id: 40, quantity: 1 }
      ]);
    });
};
