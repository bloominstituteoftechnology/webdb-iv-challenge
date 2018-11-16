exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del().then(function () {
    // Inserts seed entries
    return knex('ingredients').insert([
      { ingredient_name: 'milk' },
      { ingredient_name: 'unsalted butter' },
      { ingredient_name: 'salt' },
      { ingredient_name: 'flour' },
      { ingredient_name: 'sugar' },
      { ingredient_name: 'eggs' },
      { ingredient_name: 'cinnamon' }
    ])
  })
}
