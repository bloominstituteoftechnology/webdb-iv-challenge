
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('units').del()
    .then(function () {
      // Inserts seed entries
      return knex('units').insert([
        {id: 1, name: 'kg', multiplier: 0.4535},
        {id: 2, name: 'lb', multiplier: 1},
        {id: 3, name: 'oz', multiplier: 16}
      ]);
    });
};
