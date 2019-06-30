
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Instructions').insert([
        { step: '1', description: 'open slowly', recipe_id: '5' },
        { step: '4', description: 'shake vigorously', recipe_id: '2' },
        { step: '7', description: 'turn fire down to 20%', recipe_id: '1' }
      ]);
    });
};
