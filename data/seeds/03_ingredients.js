exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'pizza dough', measurement: 'package' }, //1
        { name: 'pepperoni', measurement: 'cups' }, //2
        { name: 'mushrooms', measurement: 'cups' }, //3
        { name: 'mozerella cheese', measurement: 'cups' }, //4
        { name: 'marinara sauce', measurement: 'cups' }, //5
        { name: 'peppers', measurement: 'cups' }, //6
        { name: 'tomatoes', measurement: 'cups' }, //7
        { name: 'corn tortillas', measurement: 'tortillas' }, //8
        { name: 'pork carnitas', measurement: 'lbs' }, //9
        { name: 'limes', measurement: 'limes' }, //10
        { name: 'cilantro', measurement: 'bunches' }, //11
        { name: 'chicken', measurement: 'lbs' }, //12
        { name: 'avacado', measurement: 'avacados' }, //13
        { name: 'taco shells', measurement: 'shells' }, //14
      ]);
    });
};
