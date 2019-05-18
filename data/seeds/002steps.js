exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {action: 'shred', measurement:2, ingredient_id:1},
        {action: 'dice', measurement:2, ingredient_id:2},
        {action: 'add', measurement:2, ingredient_id:3},
        {action: 'chop', measurement:4, ingredient_id:4}

      ]);
    });
};
