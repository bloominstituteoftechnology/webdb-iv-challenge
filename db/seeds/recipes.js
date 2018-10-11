
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes_').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_').insert([
        {name: 'tex-mex-tacos', dish_id: 1 },
        {name: 'homemade pizza', dish_id:2},
        {name: 'garden salad', dish_id:3}
      ]);
    });
};
