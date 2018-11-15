
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { step_num: 1, description: 'Sinigang ni Cheng instruction', recipe_id: 1 },
        { step_num: 2, description: 'Sinigang ni Cheng instruction', recipe_id: 1 },
        { step_num: 3, description: 'Sinigang ni Cheng instruction', recipe_id: 1 },
        { step_num: 1, description: 'Sinigang ni Marita instruction', recipe_id: 2 },
        { step_num: 2, description: 'Sinigang ni Marita instruction', recipe_id: 2 },
        { step_num: 3, description: 'Sinigang ni Marita instruction', recipe_id: 2 },
        { step_num: 1, description: 'Adobo ni Romy instruction', recipe_id: 3 },
        { step_num: 2, description: 'Adobo ni Romy instruction', recipe_id: 3 },
        { step_num: 1, description: 'Adobo ni Danny instruction', recipe_id: 4 },
        { step_num: 2, description: 'Adobo ni Danny instruction', recipe_id: 4 },
        { step_num: 1, description: 'Bulalo ni Edna instruction', recipe_id: 5 },
        { step_num: 2, description: 'Bulalo ni Edna instruction', recipe_id: 5 },
        { step_num: 1, description: 'Bulalo ni Betty instruction', recipe_id: 6 },
        { step_num: 2, description: 'Bulalo ni Betty instruction', recipe_id: 6 },
      ]);
    });
};
