
exports.seed = function(knex, Promise) {
  return knex('dishes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        { dishes_id: 1, "dish name": 'Curry'},
        { dishes_id: 2,"dish name": 'Pasta'},
      ]);
    });
};
