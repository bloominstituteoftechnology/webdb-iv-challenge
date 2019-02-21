
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, recipe_id: 1, step_num: 1, description: 'Encrust chicken thighs in the cajun spices.'},
        {id: 2, recipe_id: 1, step_num: 2, description: 'Cook in oven at 375F for 45 minutes.'},
        {id: 3, recipe_id: 3, step_num: 1, description: 'Brush chicken thighs in honey bbq sauce.'},
        {id: 4, recipe_id: 3, step_num: 2, description: 'Cook in oven at 375F for 45 minutes.'},
        {id: 5, recipe_id: 2, step_num: 1, description: 'Marinate chicken thighs in teriyaku sauce overnight.'},
        {id: 6, recipe_id: 2, step_num: 2, description: 'Cook in oven at 375F for 45 minutes.'},
        {id: 7, recipe_id: 4, step_num: 1, description: 'Slice tritip into 1.5 inch steaks.'},
        {id: 8, recipe_id: 4, step_num: 2, description: 'Broil both sides for 7 minutes each.'},
        {id: 9, recipe_id: 5, step_num: 1, description: 'Slice tritip into stir fry sized chunks.'},
        {id: 10, recipe_id: 5, step_num: 2, description: 'Dice the onions and green beans.'},
        {id: 11, recipe_id: 5, step_num: 2, description: 'Using an oiled wok, brown the tritip then set aside.'},
        {id: 12, recipe_id: 5, step_num: 2, description: 'Cook the vegetables in the wok until tender.'},
        {id: 13, recipe_id: 5, step_num: 2, description: 'Add the browned tritip chunks and stir fry until finished.'},
        {id: 14, recipe_id: 6, step_num: 1, description: 'Mix cookie dough with chocolate chips.'},
        {id: 15, recipe_id: 6, step_num: 2, description: 'Follow instructions on the cookie dough container.'},
      ]);
    });
};
