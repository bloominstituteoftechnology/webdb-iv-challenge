
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('dishes').insert([
        { name: 'Dish 1' }, // 1
        { name: 'Dish 2' }, // 2
        { name: 'Dish 3' }, // 3
        { name: 'Dish 4' }, // 4
      ]);
    });
};
