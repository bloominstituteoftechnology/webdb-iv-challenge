
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'grandma\'s tacos', dish_id:2},
        {id: 2, name: 'another recipe for tacos', dish_id:2},
        {id: 3, name: 'vida quesadillas', dish_id:3}
      ]);
    });
};
