
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { id: 1, name: 'Pepperoni', dish_id: 1 },
        { id: 2, name: 'Ahi Tuna', dish_id: 2 },
        { id: 3, name: 'Mushroom & Swiss', dish_id: 3 }
      ]);
    });
};
