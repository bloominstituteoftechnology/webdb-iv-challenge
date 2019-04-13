
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {id: 1, name: 'Banana Muffins'},
        {id: 2, name: 'Mac and Cheese'},
        {id: 3, name: 'Stir Fry'}
      ]);
    });
};
