
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {id: 1, dish: 'meatloaf'},
        {id: 2, dish: 'spaghetti'},
        {id: 3, dish: 'grilled cheese'}
      ]);
    });
};
