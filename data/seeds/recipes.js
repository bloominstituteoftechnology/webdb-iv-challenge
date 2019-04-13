
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'Veggie Pizza', dishId: 1 },
        { name: 'Meat Pizza', dishId: 1 },
        { name: 'Meat Sandwich', dishId: 2 },
        { name: 'Meat Spaghetti', dishId: 3},
        { name: 'Veggie Spaghetti', dishId: 3}
      ]);
    });
};
