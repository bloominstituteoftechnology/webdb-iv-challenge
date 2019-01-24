
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Traditional Tacos', dish_id: 1},
        {recipe_name: 'Tex-Mex Tacos', dish_id: 1},
        {recipe_name: 'No-Time Weird Microwave Pizza', dish_id: 2},
        {recipe_name: 'DIY Pizza', dish_id: 2},
        {recipe_name: 'Maruchan', dish_id: 3},
      ]);
    });
};
