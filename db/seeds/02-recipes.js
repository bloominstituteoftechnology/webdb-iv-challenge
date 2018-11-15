
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'cheese', dish_id: 1},
        {id: 2, name: 'peporroni', dish_id: 1},
        {id: 3, name: 'apple', dish_id: 2},
        {id: 4, name: 'rubbarb', dish_id: 2},
      ]);
    });
};
