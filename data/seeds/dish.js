
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dish').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dish').insert([
        {dish_name: 'Eggs'},
        {dish_name: 'Ramen'},
        {dish_name: 'Pizza'}
      ]);
    });
};
