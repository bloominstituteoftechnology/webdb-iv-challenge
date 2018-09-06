
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'ingredient 1'}, //1
        {name: 'ingredient 2'}, //2
        {name: 'ingredient 3'}, //3
        {name: 'ingredient 4'}, //4
        {name: 'ingredient 5'}, //5
        {name: 'ingredient 6'}, //6
      ]);
    });
};
