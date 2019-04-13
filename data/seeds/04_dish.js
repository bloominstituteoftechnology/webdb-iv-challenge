
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dish').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dish').insert([
        {id: 1, dish_name: 'cake', recipe_id: 1},
        
      ]);
    });
};
