exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del().then(function () {
    // Inserts seed entries
    return knex('recipes').insert([
      { name: 'ceasar salad', dish_id: 4 },
      { name: 'mandarin salad', dish_id: 4 },
      { name: 'cobb salad', dish_id: 4 }
    ])
  })
}
