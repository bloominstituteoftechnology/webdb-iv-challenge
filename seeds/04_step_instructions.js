
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_instructions').insert([
        { recipe_id: 1, step_number: 1, description: 'place romaine lettuce in a bowl' },
        { recipe_id: 1, step_number: 2, description: 'add croutons and grilled chicken breast slices in bowl' },
        { recipe_id: 1, step_number: 3, description: 'add caesar dressing, shake and enjoy' }
      ])
    })
}
