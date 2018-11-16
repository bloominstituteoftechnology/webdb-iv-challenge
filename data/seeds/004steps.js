exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { recipe_id: 1, step: 'step 1' },
        { recipe_id: 1, step: 'step 2' },
        { recipe_id: 1, step: 'step 3' },

        { recipe_id: 2, step: 'step 1' },
        { recipe_id: 2, step: 'step 2' }
      ]);
    });
};