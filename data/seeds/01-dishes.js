
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {dish_name: 'Pizza'},
        {dish_name: 'Taco'},
        {dish_name: 'Hamburger'}
      ]);
    });
};
