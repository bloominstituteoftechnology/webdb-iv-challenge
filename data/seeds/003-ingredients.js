exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  // truncate resets the ids back to 1
  return knex('ingredients')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'Stick of Butter' },
        { name: '1 tortilla' },
        { name: '1 slice of cheese' }
      ]);
    });
};
