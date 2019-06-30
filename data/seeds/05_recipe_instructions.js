
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_instructions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipe_instructions').insert([
        { recipe_id: 1, step: 1, description: 'random' },
        { recipe_id: 1, step: 2, description: 'descrip' },
        { recipe_id: 1, step: 3, description: 'to' },
        { recipe_id: 2, step: 1, description: 'fill' },
        { recipe_id: 2, step: 2, description: 'list' },
      ]);
    });
};
