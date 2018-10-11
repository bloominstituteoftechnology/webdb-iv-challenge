
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients_in_recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients_in_recipe').insert([
        {id: 1, quantity: 1.5, description: "cups of curry paste", dish_id: 1, recipe_id: 1},
        {id: 2, quantity: 101, description: "grams of bamboo shoots", dish_id: 1, recipe_id: 1},
        {id: 3, quantity: 2.5, description: "pieces of bacon", dish_id: 2, recipe_id: 2}
      ]);
    });
};
