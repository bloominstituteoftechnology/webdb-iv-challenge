
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'water'},
        {ingredient_name: 'flour'},
        {ingredient_name: 'meat'},
        {ingredient_name: 'onion'},
      ]);
    });
};
