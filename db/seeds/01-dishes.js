
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {name: 'Tacos', recipe_1: '1', recipe_2: '3'},
        {name: 'Pizza', recipe_1: '2', recipe_2: '4'},
      ]);
    });
};
