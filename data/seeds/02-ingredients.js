
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'butter'},
        { name: 'sugar'},
        { name: 'eggs'},
        { name: 'flour (whole wheat)'},
        { name: 'flour (white)'},
        { name: 'tomatoes'},
        { name: 'ground beef'},
        { name: 'lettuce'},
        { name: 'vegetable oil'}
      ]);
    });
};
