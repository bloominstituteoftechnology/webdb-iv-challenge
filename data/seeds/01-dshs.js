
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dshs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dshs').insert([
        {dshs_nme: 'Pizza'},
        {dshs_nme: 'Tacos'},
        {dshs_nme: 'Burger'}
      ]);
    });
};
