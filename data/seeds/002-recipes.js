exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate().then(function () {
    // Inserts seed entries
    return knex('recipes').insert([
      { recipe_name: 'BBQ-Burger', dish_id: 1 },
      {
        recipe_name: 'Meats-lover-pizza',
        dish_id: 2
      },
      {
        recipe_name: 'cinnamon rolls',
        dish_id: 3
      }
    ])
  })
}
