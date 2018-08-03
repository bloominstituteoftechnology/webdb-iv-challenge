
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'Bolognesa', dish_id: 1 },
        { name: 'Chicken Alfredo', dish_id: 1 },
        { name: 'Fried Spaghetti', dish_id: 1 },
        { name: 'Quayaquil street tacos', dish_id: 2 },
        { name: 'Just mac N cheese', dish_id: 3 }
      ]);
    });
};
