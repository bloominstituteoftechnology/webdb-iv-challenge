
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes_table').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes_table').insert([
        {dish_name: 'pizza'}
      ]);
    });
};
