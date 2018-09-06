
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes_ing').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ing').insert([
        {amount: 1, measurement: 'cup'},
        {amount: 2, measurement: 'teaspoon'},
        {amount: 3, measurement: 'tablespoon'}
      ]);
    });
};
