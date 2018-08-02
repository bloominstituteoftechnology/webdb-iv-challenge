
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {dish: 'Soup'},
        {dish: 'Pizza'},
        {dish: 'Dessert'}
      ]);
    });
};
