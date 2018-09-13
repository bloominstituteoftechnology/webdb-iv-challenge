
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_instructions').insert([
        { recipe_id: 1, step: 1, description: 'Do first thing' },
        { recipe_id: 1, step: 2, description: 'Mix some stuff' },
        { recipe_id: 1, step: 3, description: "put in oven" },

        { recipe_id: 2, step: 1, description: 'Do first thing' },
        { recipe_id: 2, step: 2, description: 'Mix some stuff' },
        { recipe_id: 2, step: 3, description: "put in oven" },

        { recipe_id: 3, step: 1, description: 'Do first thing' },
        { recipe_id: 3, step: 2, description: 'Mix some stuff' },
        { recipe_id: 3, step: 3, description: "put in oven" },
      ]);
    });
};
