exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes_ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes_ingredients").insert([
        { recipe_id: 1, ingredient_id: 1, quantity: 1.5, measurements: "lbs" },
        { recipe_id: 1, ingredient_id: 2, quantity: 0.5, measurements: "tsp" },
        { recipe_id: 1, ingredient_id: 3, quantity: 1, measurements: "tsp" },
        { recipe_id: 1, ingredient_id: 4, quantity: 1, measurements: "tsp" },
        { recipe_id: 1, ingredient_id: 5, quantity: 1, measurements: "" },
        { recipe_id: 1, ingredient_id: 6, quantity: 28, measurements: "oz" },
        { recipe_id: 1, ingredient_id: 7, quantity: 2, measurements: "" },
        { recipe_id: 1, ingredient_id: 8, quantity: 4, measurements: "tbsp" },
        { recipe_id: 1, ingredient_id: 9, quantity: 10.5, measurements: "oz" },
        { recipe_id: 1, ingredient_id: 10, quantity: 12, measurements: "" },
        { recipe_id: 1, ingredient_id: 11, quantity: 0.5, measurements: "" },
        { recipe_id: 1, ingredient_id: 12, quantity: 2, measurements: "" },
        { recipe_id: 1, ingredient_id: 13, quantity: 1, measurements: "" },
        { recipe_id: 1, ingredient_id: 14, quantity: 1, measurements: "" },
        { recipe_id: 1, ingredient_id: 15, quantity: 1, measurements: "" }
      ]);
    });
};
