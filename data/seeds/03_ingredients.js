exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('table_name').insert([
        { name: 'pizza dough', price: 10 }, //1
        { name: 'pepperoni', price: 5 }, //2
        { name: 'mushrooms', price: 3 }, //3
        { name: 'mozerella cheese', price: 6 }, //4
        { name: 'marinara sauce', price: 5 }, //5
        { name: 'peppers', price: 2 }, //6
        { name: 'tomatoes', price: 3 }, //7
        { name: 'corn tortillas', price: 2 }, //8
        { name: 'pork carnitas', price: 12 }, //9
        { name: 'limes', price: 2 }, //10
        { name: 'cilantro', price: 4 }, //11
        { name: 'chicken', price: 12 }, //12
        { name: 'avacado', price: 4 }, //13
        { name: 'taco shells', price: 2 }, //14
      ]);
    });
};
