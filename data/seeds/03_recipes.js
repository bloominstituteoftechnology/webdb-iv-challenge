
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'plain', description: 'A nasty, plain meatloaf', dish_id: 1},
        {id: 2, name: 'regular', description: 'Just regular spaghetti', dish_id: 2},
        {id: 3, name: 'typical', description: 'Your everyday, typical, grilled cheese sandwich.', dish_id: 3}
      ]);
    });
};
