
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient: 'butter', quantity_of_measurement: 1, measurement_unit:'cup' },
       
      ]);
    });
};
