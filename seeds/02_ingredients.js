
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: 'tomato' }, // 1
        { ingredient_name: 'onion' }, // 2
        { ingredient_name: 'pasta' }, // 3
        { ingredient_name: 'dough' }, // 4
        { ingredient_name: 'pepperoni' }, // 5
        { ingredient_name: 'pineapple' }, // 6
        { ingredient_name: 'grilled chicken breast' }, // 7
        { ingredient_name: 'water' }, // 8
        { ingredient_name: 'salt' }, // 9
        { ingredient_name: 'romaine lettuce' }, // 10
        { ingredient_name: 'croutons' }, // 11
        { ingredient_name: 'caesar dressing' } // 12
      ])
    })
}
