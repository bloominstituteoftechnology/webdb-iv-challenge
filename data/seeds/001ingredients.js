
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'potato', base_unit:'whole'},
        {name: 'onion', base_unit:'whole'},
        {name: 'soyrizo', base_unit:'tube'},
        {name: 'jalepeno', base_unit:'whole'}
      ]);
    });
};
