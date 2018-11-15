
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step: 'Moisten Flour and Knead'},
        {step: 'Spread Tomato Sauce on Dough'},
        {step: 'Add Cheese and Bake'},
        {step: 'Make Tortillas from Flour'},
        {step: 'Add Meat to Tortilla'}
      ]);
    });
};
