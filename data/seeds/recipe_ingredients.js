exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipe_ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_ingredients").insert([
        { recipe_id: 1, ingredient_id: 1, quantity: 2 },
        { recipe_id: 1, ingredient_id: 6, quantity: 2, unit_id: 3 }
      ]);
    });
};
