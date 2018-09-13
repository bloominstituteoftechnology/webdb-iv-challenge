
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Cheese Pizza', dishID: 1},
        {recipe_name: 'Beef Tacos', dishID: 2},
        {recipe_name: 'PB + J', dishID: 3}

      ]);
    });
};
