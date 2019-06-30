
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('unit').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('unit').insert([
        {name: 'gram'},
        {name: 'ounce'}
      ]);
    });
};
