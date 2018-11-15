
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dish').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dish').insert([
        {name: 'Dish1'},
        {name: 'Dish2'},
        {name: 'Dish3'},
        {name: 'Dish4'},
        {name: 'Dish5'},
        {name: 'Dish6'}
      ]);
    });
};
