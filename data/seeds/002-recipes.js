
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe: 'Loco Taco', dishId: 1},
        {recipe: 'Grandma Pizza', dishId: 2}
      ]);
    });
};
