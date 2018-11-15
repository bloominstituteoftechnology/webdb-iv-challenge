
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {Recipe: 'Recipe1', dishID: 1},
        {Recipe: 'Recipe2', dishID: 2},
        {Recipe: 'Recipe3', dishID: 3},
        {Recipe: 'Recipe4', dishID: 4},
        {Recipe: 'Recipe5', dishID: 5},
        {Recipe: 'Recipe6', dishID: 6},
        {Recipe: 'Recipe7', dishID: 7},
      ]);
    });
};
