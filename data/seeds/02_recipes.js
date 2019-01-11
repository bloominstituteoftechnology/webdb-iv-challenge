
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        { id: 1, name: 'beef tacos', dish_id: 1  },
        { id: 2, name: 'chicken tacos',  dish_id: 1 },
        { id: 3, name: 'pepperoni pizza', dish_id: 2 },
        { id: 4, name: 'cheeseburger', dish_id: 3 },
        { id: 5, name: 'double bacon extra beef jalepeno burger', dish_id: 3 },
      ]);
    });
};
