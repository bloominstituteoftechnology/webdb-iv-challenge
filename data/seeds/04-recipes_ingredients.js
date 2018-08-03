exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes_ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes_ingredients").insert([
        { recipes_id: 1, ingredients_id: 1, quantity: 1.5, measurements: "lbs" },
        { recipes_id: 1, ingredients_id: 2, quantity: 0.5, measurements: "tsp" },
        { recipes_id: 1, ingredients_id: 3, quantity: 1, measurements: "tsp" },
        { recipes_id: 1, ingredients_id: 4, quantity: 1, measurements: "tsp" },
        { recipes_id: 1, ingredients_id: 5, quantity: 1, measurements: "" },
        { recipes_id: 1, ingredients_id: 6, quantity: 28, measurements: "oz" },
        { recipes_id: 1, ingredients_id: 7, quantity: 2, measurements: "" },
        { recipes_id: 1, ingredients_id: 8, quantity: 4, measurements: "tbsp" },
        { recipes_id: 1, ingredients_id: 9, quantity: 10.5, measurements: "oz" },
        { recipes_id: 1, ingredients_id: 10, quantity: 12, measurements: "" },
        { recipes_id: 1, ingredients_id: 11, quantity: 0.5, measurements: "" },
        { recipes_id: 1, ingredients_id: 12, quantity: 2, measurements: "" },
        { recipes_id: 1, ingredients_id: 13, quantity: 1, measurements: "" },
        { recipes_id: 1, ingredients_id: 14, quantity: 1, measurements: "" },
        { recipes_id: 1, ingredients_id: 15, quantity: 1, measurements: "" },
        { recipes_id: 2, ingredients_id: 16, quantity: 0.5, measurements: "cup" },
        { recipes_id: 2, ingredients_id: 17, quantity: 0.25, measurements: "cup" },
        { recipes_id: 2, ingredients_id: 18, quantity: 1, measurements: "oz" },
        { recipes_id: 2, ingredients_id: 19, quantity: 1, measurements: "tbsp" },
        { recipes_id: 2, ingredients_id: 20, quantity: 2, measurements: "cups" },
        { recipes_id: 2, ingredients_id: 10, quantity: 8, measurements: "" },
        { recipes_id: 2, ingredients_id: 21, quantity: 1, measurements: "" },
        { recipes_id: 2, ingredients_id: 22, quantity: 1, measurements: "" },
        { recipes_id: 2, ingredients_id: 23, quantity: 4, measurements: "" },
        { recipes_id: 2, ingredients_id: 24, quantity: 4, measurements: "oz" },
        { recipes_id: 2, ingredients_id: 13, quantity: 1, measurements: "" },
        { recipes_id: 2, ingredients_id: 25, quantity: 1, measurements: "cup" }
      ]);
    });
};
