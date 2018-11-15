exports.seed = function(knex, Promise) {
  return knex('students')
    .truncate()
    .then(function() {
      return knex('students').insert([
        {
          quantity: '.5',
          measurement: 'cup',
          recipe_id: '1',
          ingedient_id: '1'
        },
        {
          quantity: '.5',
          measurement: 'cup',
          recipe_id: '1',
          ingedient_id: '3'
        },
        {
          quantity: '.5',
          measurement: 'can',
          recipe_id: '1',
          ingedient_id: '5'
        },
        {
          quantity: '.5',
          measurement: 'heap',
          recipe_id: '1',
          ingedient_id: '6'
        }
      ])
    })
}
