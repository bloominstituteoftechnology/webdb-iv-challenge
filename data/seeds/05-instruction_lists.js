
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instruction_lists').del()
    .then(function () {
      // Inserts seed entries
      return knex('instruction_lists').insert([
        {instruction_step: '1', instructions: 'Spread pizza dough on a baking sheet.', recipe_id: '1'},
        {instruction_step: '2', instructions: 'Slather pizza sauce on the dough', recipe_id: '1'},
        {instruction_step: '1', instructions: 'Get two pieces of bread... ', recipe_id: '2'}
      ]);
    });
};
