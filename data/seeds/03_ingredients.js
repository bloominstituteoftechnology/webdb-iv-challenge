exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'pizza dough', measurement: 'package' },
        { name: 'pepperoni', measurement: 'cups' },
        { name: 'mushrooms', measurement: 'cups' },
        { name: 'mozerella cheese', measurement: 'cups' },
        { name: 'marinara sauce', measurement: 'cups' },
        { name: 'peppers', measurement: 'cups' },
        { name: 'tomatoes', measurement: 'cups' },
        { name: 'corn tortillas', measurement: 'tortillas' },
        { name: 'pork carnitas', measurement: 'lbs' },
        { name: 'limes', measurement: 'limes' }, 
        { name: 'cilantro', measurement: 'bunches' },
        { name: 'chicken', measurement: 'lbs' },
        { name: 'avacado', measurement: 'avacados' },
        { name: 'taco shells', measurement: 'shells' },
      ]);
    });
};
