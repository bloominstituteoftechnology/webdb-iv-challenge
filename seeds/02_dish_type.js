
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dish_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('dish_type').insert([
        {dish_type_name: 'casual'},
        {dish_type_name: 'deserts'},
        {dish_type_name: 'tacos'}
      ]);
    });
};
