
exports.seed = function(knex, Promise) {
  return knex('dishes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        { dish_id: 1, "name": 'Curry'},
        { dish_id: 2, "name": 'Pasta'},
      ]);
    });
};
