
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        { dish_name: 'chicken' },
        { dish_name: 'beef' },
        { dish_name: 'pizza' },
        { dish_name: 'salad' },
        { dish_name: 'dessert' }
      ])
    })
}
