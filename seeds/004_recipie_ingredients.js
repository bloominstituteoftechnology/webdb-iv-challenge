exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipie_ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipie_ingredients").insert([
        { ingredient_id: 1, quantity: 2.5, recipe_id: 1 },
        { ingredient_id: 2, quantity: 1, recipe_id: 1 },
        { ingredient_id: 3, quantity: 5, recipe_id: 3 },
        { ingredient_id: 4, quantity: 1, recipe_id: 1 },
        { ingredient_id: 5, quantity: 1, recipe_id: 2 },
        { ingredient_id: 6, quantity: 1, recipe_id: 2 },
        { ingredient_id: 7, quantity: 1, recipe_id: 3 }
      ]);
    });
};
