exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  // truncate resets the ids back to 1
  return knex('steps')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('steps').insert([
        { name: 'Add sugar to mix' },
        { name: 'Heat the tortillas' },
        { name: 'Pour the pancake batter' },
        { name: 'Grill the meat for 20 minutes' }
      ]);
    });
};
