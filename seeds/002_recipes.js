exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'Creamistry', dish_id: 1 },
        { name: 'Smittens', dish_id: 1 },
        { name: 'Bi-rite', dish_id: 1 }
      ]);
    });
};
