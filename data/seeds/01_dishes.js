exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del().then(function () {
    // Inserts seed entries
    return knex('dishes').insert([
      { name: 'chicken' },
      { name: 'beef' },
      { name: 'pizza' },
      { name: 'salad' },
      { name: 'dessert' }
    ])
  })
}
