
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'DaWorks', dish_id: 1 },
        { name: 'Chicken Tacos', dish_id: 2 },
        { name: 'Grams Special', dish_id: 3 }
      ]);
    });
};
