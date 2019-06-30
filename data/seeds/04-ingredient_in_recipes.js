exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("Ingredients in Recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("Ingredients in Recipes").insert([
        { recipe_id: 1, ingredient_id: 1, quantity: 5, units: "tortillas" },
        { recipe_id: 1, ingredient_id: 2, quantity: 1, units: "lb" },
        { recipe_id: 3, ingredient_id: 3, quantity: 8, units: "oz" },
        { recipe_id: 3, ingredient_id: 4, quantity: 1, units: "cup" },
        { recipe_id: 5, ingredient_id: 5, quantity: 4, units: "oz" },
        { recipe_id: 5, ingredient_id: 6, quantity: 1, units: "lb" },
        { recipe_id: 5, ingredient_id: 7, quantity: 3, units: "carrots" }
      ]);
    });
};
