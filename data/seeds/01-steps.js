
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step: 'Mix Flour in Bowl'},
        {step: 'Pour Tomato Sauce on Dough'},
        {step: 'Add Cheese and Bake'},
        {step: 'Place Pineapples'},
        {step: 'Place Ham'},
        {step: 'Use Flour to Make 3 Tortillas'},
        {step: 'Add Meat to Tortilla'},
      ]);
    });
};
