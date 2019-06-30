exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("Steps in Recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("Steps in Recipes").insert([
        { step_id: 1, recipe_id: 1, order: 1 },
        { step_id: 6, recipe_id: 1, order: 2 },
        { step_id: 2, recipe_id: 3, order: 1 },
        { step_id: 3, recipe_id: 3, order: 2 },
        { step_id: 4, recipe_id: 5, order: 1 },
        { step_id: 5, recipe_id: 5, order: 2 },
        { step_id: 6, recipe_id: 5, order: 3 }
      ]);
    });
};
