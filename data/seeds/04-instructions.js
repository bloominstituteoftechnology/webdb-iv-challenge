
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { recipe_id: 2, step_number: 1, step_instruction: 'Add whole-wheat flour, butter, sugar, and eggs into a mixing bowl. Whisk unitl smooth.' },
        { recipe_id: 2, step_number: 2, step_instruction: 'Heat pan over medium-high heat. Spray with non-sitck cooking spray.' },
        { recipe_id: 2, step_number: 3, step_instruction: 'Add half-cup of pancake batter to pan. Flip when pancake starts to bubble on top.' },
        { recipe_id: 5, step_number: 1, step_instruction: 'Mix white flour with water, oil, and yeast. Let dough rise overnight.' },
        { recipe_id: 5, step_number: 2, step_instruction: 'Stew tomatoes over high heat until soft. Puree in blender.' },
        { recipe_id: 5, step_number: 3, step_instruction: 'Use a rolling pin to flatten pizza dough. Add tomato sauce, cheese, and desired toppings.' },
        { recipe_id: 5, step_number: 4, step_instruction: 'Bake at 400 degrees until crust of pizza is golden-brown.' },
      ]);
    });
};
