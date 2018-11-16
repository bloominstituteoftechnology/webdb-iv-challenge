exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del().then(function () {
    // Inserts seed entries
    return knex('steps').insert([
      { recipe_id: 1, step: 1, description: 'Place romaine lettuce in a bowl' },
      {
        recipe_id: 1,
        step: 2,
        description: 'Add croutons and grilled chicken breast slices in bowl'
      },
      {
        recipe_id: 1,
        step: 3,
        description: 'Add caesar dressing, shake and enjoy'
      }
    ])
  })
}
