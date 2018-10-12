
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Recipes').insert([
        { recipeName: 'slow cooked', dish_id: 1},
        { recipeName: 'creamy', dish_id: 2},
        { recipeName: 'roasted', dish_id: 1},
        { recipeName: 'slow cooked', dish_id: 3},
        { recipeName: 'roasted with almonds', dish_id: 3}
      ]);
    });
};
