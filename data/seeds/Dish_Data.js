
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('Dish')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Dish').insert([
        { Name: 'Pizza' },
        { Name: 'Soup' },
        { Name: 'Burger' }
      ]);
    });
};
