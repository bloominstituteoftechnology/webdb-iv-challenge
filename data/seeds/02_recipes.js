exports.seed = function(knex, Promise) {
  return knex('recipes')
    .truncate()
    .then(function() {
      return knex('recipes').insert([
        { name: "Granny's", dish_id: '1' },
        { name: 'Tex Mex', dish_id: '1' },
        { name: 'Sourdough', dish_id: '2' },
        { name: 'Whole Grain', dish_id: '2' },
        { name: 'Plain', dish_id: '3' },
        { name: 'Meat', dish_id: '3' }
      ])
    })
}
