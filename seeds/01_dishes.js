
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {id: 1, dish_name: 'taquitos'},
        {id: 2, dish_name: 'flautas'},
        {id: 3, dish_name: 'congri'}
      ]);
    });
};
