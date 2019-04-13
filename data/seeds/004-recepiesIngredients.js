
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('IngredientsRecepie').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('IngredientsRecepie').insert([
        {recepieId: 1, ingredientId: 1},
        {recepieId: 2, ingredientId: 2},
        {recepieId: 3, ingredientId: 3}
      ]);
    });
};
