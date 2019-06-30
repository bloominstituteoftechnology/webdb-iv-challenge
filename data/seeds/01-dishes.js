
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        { name: 'Cold Cereal'},
        { name: 'Half a Piece of Toast'},
        { name: 'Coffee From This Morning'}
      ]);
    });
};
