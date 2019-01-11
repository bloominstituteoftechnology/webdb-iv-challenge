
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        { dish_name: 'Thai Green Curry'},
        { dish_name: 'Hawian Pizza'},
        { dish_name: 'Mountian Lava Cake'}
      ]);
    });
};
