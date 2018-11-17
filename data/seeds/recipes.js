
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'Veggie Pizza', dishId: 1 },
        { name: 'Meat Pizza', dishId: 1 },
        { name: 'Veggie Soup', dishId: 2 },
        { name: 'Meat Soup', dishId: 2 },
        { name: 'Veggie Burger', dishId: 3 },
        { name: 'Meat Burger', dishId: 3 }
      ]);
    });
};
