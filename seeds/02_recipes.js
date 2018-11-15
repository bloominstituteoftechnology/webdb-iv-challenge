
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'vaqueros t', dish_id: 1},
        {id: 2, recipe_name: 'wonky t', dish_id: 1},
        {id: 3, recipe_name: 'delicious f', dish_id: 2},
        {id: 4, recipe_name: 'terrible f', dish_id: 2},
        {id: 5, recipe_name: 'pretty good c', dish_id: 3},
        {id: 6, recipe_name: 'not great c', dish_id: 3}
      ]);
    });
};
