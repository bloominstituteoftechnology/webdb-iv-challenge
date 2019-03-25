
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('DishesToRecipie').del()
    .then(function () {
      // Inserts seed entries
      return knex('DishesToRecipie').insert([
        {dish_id: 1, recpie_id: 1},
        {dish_id: 1, recpie_id: 2},
        {dish_id: 2, recpie_id: 3},
        {dish_id: 3, recpie_id: 4}
      ]);
    }),
    knex('RecpiesToIngredient').del()
    .then(function () {
      // Inserts seed entries
      return knex('RecpiesToIngredient').insert([
        {recpie_id: 1, ingredient_id: 1, quantity: 10.5},
        {recpie_id: 2, ingredient_id: 1, quantity: 0.6},
        {recpie_id: 3, ingredient_id: 1, quantity: 0.8}
      ]);
    }),
    knex('RecipeToInstruction').del()
    .then(function () {
      // Inserts seed entries
      return knex('RecipeToInstruction').insert([
        {recpie_id
          : 1, instruction_id: 1, step: 1},
          {recpie_id
            : 1, instruction_id: 2, step: 2},
        {recpie_id
          : 2, instruction_id: 2, step: 1},
        {recpie_id
          : 3, instruction_id: 3, step: 1}
      ]);
    }),
  ])
};
