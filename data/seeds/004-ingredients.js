exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'unicorn flour', measurement_unit: 'cups' },
        { name: 'real meat', measurement_unit: 'oz' },
        { name: 'milk', measurement_unit: 'cups' },
        { name: 'the sauce', measurement_unit: 'tbsp' },
        { name: 'actual buns', measurement_unit: 'buns' },
        { name: 'king cheese', measurement_unit: 'slices' },
      ]);
    });
};
