exports.seed = function(knex, Promise) {
  return knex('dishes').del()
    .then(function () {
      return knex('dishes').insert([
        { id: 1, name: 'breakfast' },
        { id: 2, name: 'lunch' },
        { id: 3, name: 'dinner' }
      ]);
    });
};
