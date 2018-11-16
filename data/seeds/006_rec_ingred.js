
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rec_ingred').del()
    .then(function () {
      // Inserts seed entries
      return knex('rec_ingred').insert([
        {recipe_id: 1 , ingredient_id: 2, quantity: 12},
        {recipe_id: 1 , ingredient_id: 5, quantity:2},
        {recipe_id: 1 , ingredient_id: 8, quantity: 5},
        {recipe_id: 2 , ingredient_id: 1, quantity: 3},
        {recipe_id: 2 , ingredient_id: 10, quantity:8},
        {recipe_id: 2 , ingredient_id: 5, quantity: 2},
        {recipe_id: 3 , ingredient_id: 4, quantity: 1},
        {recipe_id: 3 , ingredient_id: 3, quantity:4},
        {recipe_id: 3 , ingredient_id: 6, quantity: 6},
      ]);
    });
};
