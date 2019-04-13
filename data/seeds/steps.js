exports.seeds = function(knex, Promise) {
  return knex('steps').truncate()
  .then(function() {
    return knex('steps').insert([
      {stepNumber:1, recipeId:1, description:'cook weiner'},
      {stepNumber:2, recipeId:1, description:'add ketchup'},
      {stepNumber:1, recipeId:2, description:'cook beef patty'},
      {stepNumber:2, recipeId:2, description:'add toppings'},
      {stepNumber:1, recipeId:3, description:'cook bacon & beef patty'},
      {stepNumber:2, recipeId:3, description:'add toppings'}
    ]);
  });
};