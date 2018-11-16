
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {recipe_id: 1, step: 'pizza pizza 1'},
        {recipe_id: 1, step: 'pizza pizza 2'},
        {recipe_id: 1, step: 'pizza pizza 3'},
        {recipe_id: 1, step: 'pizza pizza 4'},
        {recipe_id: 2, step: 'pizza pizza 1'},
        {recipe_id: 2, step: 'pizza pizza 2'},
        {recipe_id: 2, step: 'pizza pizza 3'},
        {recipe_id: 3, step: 'pizza pizza 1'},
        {recipe_id: 3, step: 'pizza pizza 2'},
        {recipe_id: 3, step: 'pizza pizza 3'},
        
      ]);
    });
};
