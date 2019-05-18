exports.seed = function(knex, Promise) {
  return knex('ingredients')
    .truncate()
    .then(function() {
      return knex('ingredients').insert([
        { name: "Flour" },
        { name: 'Meat' },
        { name: 'Water' },
        { name: 'Yeast' },
        { name: 'Tomato Sauce' },
        { name: 'Jalapeno' }
      ])
    })
}
