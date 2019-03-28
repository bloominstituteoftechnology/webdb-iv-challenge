
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dish').del()
    .then(function () {
      // Inserts seed entries
      return knex('dish').insert([
        { dish: 'bread', ingredient_id: 1, ingredient_id: 2, ingredient_id: 3, ingredient_id: 4, },
        { dish: 'tortilla', ingredient_id: 1, ingredient_id: 2, ingredient_id: 3,}
      ]);
    });
};
