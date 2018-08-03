
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dish_recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('dish_recipe').insert([
        {dish_id: 1 , recipe_id: 1},
        {dish_id: 1 , recipe_id: 2},
        {dish_id: 1 , recipe_id: 3},
        {dish_id: 2 , recipe_id: 4},
        {dish_id: 2 , recipe_id: 1},
        {dish_id: 2 , recipe_id: 5}
      ]);
    });
};
