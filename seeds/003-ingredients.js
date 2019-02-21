
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'raw chicken thighs'},
        {id: 2, ingredient_name: 'raw tritip'},
        {id: 3, ingredient_name: 'cookie dough'},
        {id: 4, ingredient_name: 'honey bbq sauce'},
        {id: 5, ingredient_name: 'teriyaki sauce'},
        {id: 6, ingredient_name: 'cajun spices'},
        {id: 7, ingredient_name: 'green beans'},
        {id: 8, ingredient_name: 'onions'},
        {id: 9, ingredient_name: 'chocolate chips'},
      ]);
    });
};
