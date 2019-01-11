
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {dish_id: 1, name: 'Chicago Style Pizza'},
        {dish_id: 2, name: 'Viking'},
        {dish_id: 3, name: 'PB&J Sammich'}
      ]);
    });
};
