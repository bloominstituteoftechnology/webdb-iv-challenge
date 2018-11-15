exports.seed = function(knex, Promise) {
  return knex('steps')
    .truncate()
    .then(function() {
      return knex('steps').insert([
        { recipe_id: '1', step: '1', action: 'Do step 1' },
        { recipe_id: '1', step: '2', action: 'Do step 2' },
        { recipe_id: '1', step: '3', action: 'Do step 3' },
        { recipe_id: '2', step: '1', action: 'chop' },
        { recipe_id: '2', step: '2', action: 'stir' },
        { recipe_id: '2', step: '3', action: 'cook' }
      ])
    })
}
