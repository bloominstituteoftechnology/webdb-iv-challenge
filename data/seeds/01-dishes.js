
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Dishes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Dishes').insert([
        {DishName: 'pizza'},
        {DishName: 'tacos'},
        {DishName: 'quesadilla'},
      ]);
    });
};
