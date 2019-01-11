
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {id: 1, dish_name: 'tacos'},
        {id: 2, dish_name: 'burritos'},
        {id: 3, dish_name: 'nachos'},
        {id: 4, dish_name: 'porkchops'},
        {id: 5, dish_name: 'chicken'},
        {id: 6, dish_name: 'fish'},
        {id: 7, dish_name: 'pizza'},
      ]);
    });
};
