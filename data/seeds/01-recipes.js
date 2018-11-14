
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Sweet Potato', recipe_id:1},
        {name: 'ButterMilk', recipe_id: 2},
      ]);
    });
};
