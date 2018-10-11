
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Recipies').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Recipies').insert([
        {RecipeName: 'plain_cheese', dish_id: 1 },
        {RecipeName: 'peperoni', dish_id: 1 },
        {RecipeName: 'mushroom', dish_id: 1 },
        {RecipeName: 'tex-mex', dish_id: 2 },
        {RecipeName: 'homemade', dish_id: 3},
        {RecipeName: 'special_q', dish_id: 3 },
      ]);
    });
};
