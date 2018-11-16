exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del().then(function () {
    // Inserts seed entries
    return knex('ingredients').insert([
      { name: 'tomato' }, // 1
      { name: 'onion' }, // 2
      { name: 'pasta' }, // 3
      { name: 'dough' }, // 4
      { name: 'pepperoni' }, // 5
      { name: 'pineapple' }, // 6
      { name: 'grilled chicken breast' }, // 7
      { name: 'water' }, // 8
      { name: 'salt' }, // 9
      { name: 'romaine lettuce' }, // 10
      { name: 'croutons' }, // 11
      { name: 'caesar dressing' } // 12
    ])
  })
}
