exports.seed = function(knex, Promise) {
  return knex('recipe_ingredients')
    .truncate()
    .then(function() {
      return knex('recipe_ingredients').insert([
        {
          quantity: '.5',
          measurment: 'cup',
          recipe_id: '1',
          ingredient_id: '1'
        },
        {
          quantity: '.5',
          measurment: 'cup',
          recipe_id: '1',
          ingredient_id: '3'
        },
        {
          quantity: '.5',
          measurment: 'can',
          recipe_id: '1',
          ingredient_id: '5'
        },
        {
          quantity: '.5',
          measurment: 'heap',
          recipe_id: '1',
          ingredient_id: '6'
        }
      ])
    })
}
