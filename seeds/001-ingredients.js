
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'blue cheese', recipe_id:1},
        {name: 'hamburger patty', recipe_id:1},
        {name: 'sesame seed bun', recipe_id:1}
      ]);
    });
};
