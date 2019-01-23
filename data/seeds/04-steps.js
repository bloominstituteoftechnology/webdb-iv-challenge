
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { order: 1, instruction: 'get bread', recipe_id:2},
        { order: 2, instruction: 'get meat (ham)', recipe_id:2},
        { order: 3, instruction: 'get cheese', recipe_id:2},
        { order: 4, instruction: 'put all ingreadients in between breads', recipe_id:2},
        { order: 1, instruction: 'get milk',recipe_id:1},
        { order: 2, instruction: 'get cereal (frosted flakes)', recipe_id:1},
        { order: 3, instruction: 'put ingredients in a bowl', recipe_id:1}
      ]);
    });
};
