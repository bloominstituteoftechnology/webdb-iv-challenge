
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Awesome Burrito', dish_id: 1},
        {name: 'The Best Sandwich', dish_id: 2},
        {name: 'Perfect Pizza', dish_id: 3}
      ]);
    });
};
