exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipe_ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_ingredients").insert([
        { recipe_id: 1, ingredient_id: 1, quantity: 1, units: "units" },
        { recipe_id: 1, ingredient_id: 2, quantity: 2, units: "oz" },
        { recipe_id: 1, ingredient_id: 3, quantity: 2, units: "oz" },
        { recipe_id: 2, ingredient_id: 4, quantity: 6, units: "oz" },
        { recipe_id: 2, ingredient_id: 2, quantity: 16, units: "oz" },
        { recipe_id: 2, ingredient_id: 5, quantity: 4, units: "units" },
        { recipe_id: 3, ingredient_id: 6, quantity: 6, units: "cups" },
        { recipe_id: 3, ingredient_id: 7, quantity: 8, units: "oz" },
        { recipe_id: 3, ingredient_id: 8, quantity: 4, units: "oz" },
        { recipe_id: 3, ingredient_id: 9, quantity: 4, units: "oz" },
        { recipe_id: 3, ingredient_id: 10, quantity: 1, units: "lb" },
        { recipe_id: 3, ingredient_id: 11, quantity: 4, units: "oz" }
      ]);
    });
};
