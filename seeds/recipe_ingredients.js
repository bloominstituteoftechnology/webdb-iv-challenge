
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients_in_recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients_in_recipe').insert([
        {id: 1, description: "box of noodles", dish_id: 1, recipe_id: 1},
        {id: 2, description: "jar of sauce", dish_id: 1, recipe_id: 1},
        {id: 3, description: "store bought fish", dish_id: 2, recipe_id: 2},
        {id: 4, description: "bottle of oil", dish_id: 2, recipe_id: 2}
      ]);
    });
};
