exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {instructions: 'Preheat oven to 350 degrees', order: 1, recipe_id: 1},
        {instructions: 'Mix butter and milk', order: 2, recipe_id: 3},
        {instructions: 'Chop onion', order: 1, recipe_id: 4},
        {instructions: 'In medium bowl, whisk together sugar', order: 1, recipe_id: 2},
        {instructions: 'beating constantly until stiff peaks form', order: 2, recipe_id: 2},
        {instructions: 'Gradually add the egg mixture to the mixture in saucepan', order: 1, recipe_id: 1},
        {instructions: 'Preheat oven to 400 degrees', order: 1, recipe_id: 1},
        {instructions: 'Refrigerate until ready to serve', order: 5, recipe_id: 1},
      
      ]);
    });
};