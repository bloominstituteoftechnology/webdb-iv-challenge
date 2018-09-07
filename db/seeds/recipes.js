
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Rosemary Lemon Grilled Chicken', dish_id: 1},
        {name: 'Pumpkin Muffins', dish_id: 2}
      ]);
    });
};
