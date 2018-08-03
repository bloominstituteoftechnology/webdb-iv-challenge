
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sqlite_sequence').del()
    .then(function () {
      // Inserts seed entries
      return knex('sqlite_sequence').insert([
        {name: 'Dishes', seq: 0},
        {name: 'Recipes', seq: 0},
        {name: 'Step_Ingredient', seq: 0},
        {name: 'Ingredients', seq: 0}
      ]);
    });
};
