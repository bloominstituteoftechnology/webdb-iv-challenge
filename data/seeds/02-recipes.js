
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_name: 'Tex-Mex', dishes_id: 1},
        { recipe_name: 'Chocolate', dishes_id: 2},
        { recipe_name: 'Apple', dishes_id: 3},
        { recipe_name: 'Cheesecake', dishes_id: 2 },
        { recipe_name: 'Cali-Mex', dishes_id: 1 },
        { recipe_name: 'Pumpkin', dishes_id: 3 },
      ]);
    });
};
