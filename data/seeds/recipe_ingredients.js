exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipe_ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_ingredients").insert([
        { recipe_id: 1, ingredient_id: 1, amount: 10, units: "grams" },
        { recipe_id: 1, ingredient_id: 2, amount: 20, units: "grams" },
        { recipe_id: 1, ingredient_id: 3, amount: 15, units: "grams" },
        { recipe_id: 2, ingredient_id: 6, amount: 30, units: "grams" },
        { recipe_id: 2, ingredient_id: 3, amount: 50, units: "grams" },
        { recipe_id: 2, ingredient_id: 7, amount: 20, units: "grams" },
        { recipe_id: 2, ingredient_id: 8, amount: 20, units: "grams" },
        { recipe_id: 2, ingredient_id: 11, amount: 20, units: "grams" },
        { recipe_id: 3, ingredient_id: 4, amount: 25, units: "grams" },
        { recipe_id: 3, ingredient_id: 3, amount: 15, units: "grams" },
        { recipe_id: 3, ingredient_id: 5, amount: 10, units: "grams" }
      ]);
    });
};
