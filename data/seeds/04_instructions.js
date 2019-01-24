
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {step_num: 1, step: 'Step 1 tradictional tacos', recipe_id: 1},
        {step_num: 2, step: 'Step 2 tradictional tacos', recipe_id: 1},
        {step_num: 3, step: 'Step 3 tradictional tacos', recipe_id: 1},
        
        {step_num: 1, step: 'Step 1 Tex-Mex Tacos', recipe_id: 2},
        {step_num: 2, step: 'Step 2 Tex-Mex Tacos', recipe_id: 2},
        {step_num: 3, step: 'Step 3 Tex-Mex Tacos', recipe_id: 2},
        
        {step_num: 1, step: 'Step 1 Weird Microwave Pizza', recipe_id: 1},
        {step_num: 2, step: 'Step 2 Weird Microwave Pizza', recipe_id: 2},
        {step_num: 3, step: 'Step 3 Weird Microwave Pizza', recipe_id: 3},
        
        {step_num: 1, step: 'Step 1 DIY Pizza', recipe_id: 4},
        {step_num: 2, step: 'Step 2 DIY Pizza', recipe_id: 4},
        {step_num: 3, step: 'Step 3 DIY Pizza', recipe_id: 4},

        {step_num: 1, step: 'Step 1 Maruchan', recipe_id: 5},
        {step_num: 2, step: 'Step 2 Maruchan', recipe_id: 5},
        {step_num: 3, step: 'Step 3 Maruchan', recipe_id: 5},
        
      ]);
    });
};
