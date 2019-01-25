
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {id: 1, dish_name: 'Spaghetti'},
        {id: 2, dish_name: 'Mac & Cheese'},
        {id: 3, dish_name: 'Hamburgers'}
      ]);
    });
};
