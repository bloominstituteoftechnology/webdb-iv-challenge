
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'pizza1', dish_id: 1 , recipe_instruction:' inst 1 '},
        {recipe_name: 'pizza2', dish_id: 1, recipe_instruction:' inst 2 '},
        {recipe_name: 'stew1', dish_id: 2, recipe_instruction:' inst 3 '},
        {recipe_name: 'stew2', dish_id: 2, recipe_instruction:' inst 4 '},
        {recipe_name: 'buger1', dish_id: 3, recipe_instruction:' inst 5 '},
      ]);
    });
};
