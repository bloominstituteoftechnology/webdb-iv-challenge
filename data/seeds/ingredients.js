exports.seeds = function(knex, Promise) {
  return knex('ingredients').truncate()
  .then(function() {
    return knex('ingredients').insert([
      {id:1, name:'weiner', recipeId:1, quantity:1, unit:'lb'},
      {id:2, name:'beef patty', recipeId:2, quantity:2, unit:'lb'},
      {id:3, name:'bacon & beef patty',recipeId:3, quantity:3, unit:'lb'},
      {id:4, name:'ketchup', recipeId:1, quantity:1, unit:'oz'},
      {id:5, name:'toppings', recipeId:2, quantity:1, unit:'oz'},
      {id:6, name:'toppings', recipeId:3, quantity:1, unit:'oz'}
    ])
  })
}