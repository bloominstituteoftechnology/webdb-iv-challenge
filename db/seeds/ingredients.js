
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'flour'},
        {id: 2, ingredient_name: 'tongue'},
        {id: 3, ingredient_name: 'cheese'},
        {id: 4, ingredient_name: 'tomato'},
        {id: 5, ingredient_name: 'beef_patty'},
        {id: 6, ingredient_name: 'tortilla'},
      ]);
    });
};
