
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'dough', recipe_id: 1, quantity:1},
        {id: 2, name: 'buns', recipe_id:2, quantity:1},
        {id: 3, name: 'ketchup', recipe_id: 2},
      ]);
    });
};