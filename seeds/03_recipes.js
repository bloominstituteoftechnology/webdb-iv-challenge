
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_name: 'ceasar salad', dish_id: 4 },
        { recipe_name: 'mandarin salad', dish_id: 4 },
        { recipe_name: 'cobb salad', dish_id: 4 }
      ])
    })
}
