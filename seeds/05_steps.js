
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 0, text: 'Fry the meat', recipeId: 0, order: 0},
        {id: 1, text: 'Warm tortillas', recipeId: 0, order: 1},
        {id: 2, text: 'Add meat to tortillas', recipeId: 0, order: 2}
      ]);
    });
};