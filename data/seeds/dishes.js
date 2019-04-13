
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {name: 'Steak of Greatness'},
        {name: 'Veggie Meal'},
        {name: 'Steak and Veggie'}
      ]);
    });
};
