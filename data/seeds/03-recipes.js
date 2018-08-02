
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'Chicken Taco', dish_id: 1 },
        { name: 'Burnt Taco', dish_id: 1 },
        { name: 'Lost Taco', dish_id: 1 },
        { name: 'Test Recipe 1', dish_id: 2 },
        { name: 'Test Recipe 2', dish_id: 2 },
        { name: 'Test Recipe 3', dish_id: 2 }
      ]);
    });
};
