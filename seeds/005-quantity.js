
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('quantities').del()
    .then(function () {
      // Inserts seed entries
      return knex('quantities').insert([
        { recipe_id: 1, ingredient_id: 1, quantity: "2 whole tomatoes" },
        { recipe_id: 1, ingredient_id: 2, quantity: "12 oz" },
        { recipe_id: 2, ingredient_id: 2, quantity: "12 oz" },
        { recipe_id: 2, ingredient_id: 3, quantity: "200 oz" },
        { recipe_id: 2, ingredient_id: 4, quantity: "1 lb" },
        { recipe_id: 3, ingredient_id: 1, quantity: "2 whole tomatoes" },
        { recipe_id: 3, ingredient_id: 2, quantity: "12 oz" },
        { recipe_id: 4, ingredient_id: 6, quantity: "1 box" },
        { recipe_id: 5, ingredient_id: 7, quantity: "64 oz" },
        { recipe_id: 5, ingredient_id: 8, quantity: "1 wheel" }
      ]);
    });
};
