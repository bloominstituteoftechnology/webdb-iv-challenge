
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        //chicken tacos
        {id: 1, ingredient_name: 'shredded chicken', quantity: 1.25, recipe_id: 1},
        {id: 2, ingredient_name: 'cheese', quantity: .25, recipe_id: 1},
        {id: 3, ingredient_name: 'lettuce', quantity: .65, recipe_id: 1},
        {id: 4, ingredient_name: 'tomatos', quantity: .35, recipe_id: 1},
        {id: 5, ingredient_name: 'totilla', quantity: .35, recipe_id: 1},
        //bbq pizza
        {id: 6, ingredient_name: 'shredded chicken', quantity: 2.25, recipe_id: 5},
        {id: 7, ingredient_name: 'bbq sauce', quantity: 1.56, recipe_id: 5},
        {id: 8, ingredient_name: 'red onions', quantity: .90, recipe_id: 5},
        {id: 9, ingredient_name: 'pizza dough', quantity: .90, recipe_id: 5},
      ]);
    });
};
