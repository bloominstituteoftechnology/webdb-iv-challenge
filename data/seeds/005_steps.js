
exports.seed = function(knex, Promise) {
  return knex("steps")
    .truncate()
    .then(function () {
      return knex("steps").insert([
        { recipe_id: 1, step: 'mix for 100 hours', step_order: 2 },
        { recipe_id: 1, step: 'bake at 25 degrees', step_order: 1 },
        { recipe_id: 2, step: 'serve immediately', step_order: 2 },
        { recipe_id: 2, step: 'butter those rascals up', step_order: 1 },
        { recipe_id: 3, step: 'crush ingredients with mortal and pestle', step_order: 1 },
        { recipe_id: 3, step: 'take a quick walk', step_order: 2 },
        { recipe_id: 4, step: 'fry', step_order: 2 },
        { recipe_id: 4, step: 'simmer until completely evaporated', step_order: 1 },
        { recipe_id: 5, step: 'burn to hearty crisp', step_order: 2 },
        { recipe_id: 5, step: 'peel with great affection and gratitude', step_order: 1 },
        { recipe_id: 6, step: 'melt until gaseous', step_order: 1 },
        { recipe_id: 6, step: 'freeze until decemeber', step_order: 2 },
        { recipe_id: 7, step: 'chop into dodecahedral pieces', step_order: 1 },
        { recipe_id: 7, step: 'stir vigorously with both arms', step_order: 2 },
        { recipe_id: 8, step: 'no one will know if you eat some raw batter, right?', step_order: 2 },
        { recipe_id: 8, step: 'toss in the air like a pizza', step_order: 1 },
      ]);
    });
};
