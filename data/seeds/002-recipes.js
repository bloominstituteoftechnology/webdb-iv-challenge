exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  // truncate resets the ids back to 1
  return knex('recipes')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'Blueberry Pancakes', ingredients: knex.select('name.Stick of Butter').from('ingredients') }
        // { name: 'Italian Combo' },
        // { name: 'Chicken Tacos' }
      ]);
    });
};
