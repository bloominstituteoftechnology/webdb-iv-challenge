exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('instructions').insert([
        { recipe_id: 1, step: 1, description: 'Seer Ahi' },
        { recipe_id: 1, step: 2, description: 'Scorch tortilla' },
        { recipe_id: 1, step: 3, description: 'Assemble' },
        { recipe_id: 2, step: 1, description: 'Make dough' },
        { recipe_id: 2, step: 2, description: 'Make tomato sauce' },
        { recipe_id: 2, step: 3, description: 'Assemble and bake' },
      ]);
    });
};
