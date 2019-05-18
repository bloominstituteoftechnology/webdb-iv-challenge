
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Classic Burger', dishId: 1},
        {id: 2, name: 'Warm Soup', dishId: 2},
        {id: 3, name: 'Saucy Pizza', dishId: 3}
      ]);
    });
};
