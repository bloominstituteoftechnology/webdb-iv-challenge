
exports.seed = function(knex, Promise) {
    return knex("recipe_ingredients").insert([
      { recipe_id: 1, ingredient_id: 1, quantity: 2 }, // 1
      { recipe_id: 1, ingredient_id: 1, quantity: 9 }, // 2
      { recipe_id: 1, ingredient_id: 2, quantity: 2 }, // 3
      { recipe_id: 2, ingredient_id: 2, quantity: 6 }, // 4
      { recipe_id: 3, ingredient_id: 4, quantity: 3 }, // 5
      { recipe_id: 3, ingredient_id: 4, quantity: 10 }, // 6
      { recipe_id: 4, ingredient_id: 4, quantity: 15 }, // 7
      { recipe_id: 4, ingredient_id: 1, quantity: 2 }, // 8
      { recipe_id: 4, ingredient_id: 4, quantity: 67 } // 9
    ]);
  };