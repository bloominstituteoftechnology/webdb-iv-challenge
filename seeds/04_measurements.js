
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('measurements').del()
    .then(function () {
      // Inserts seed entries
      return knex('measurements').insert([
        {unit: 'cup'},
        {unit: 'teaspoon'},
        {unit: 'tablespoon'},
        {unit: 'oz.'},
        {unit: 'dash'},
        {unit: 'g.'}
      ]);
    });
};
