
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {dish_id: '1', name: 'cheese'},
        {dish_id: '1', name: 'mushroom'},
        {dish_id: '1', name: 'peppers'},
        {dish_id: '2', name: 'sesame'},
        {dish_id: '2', name: 'fried'},
        {dish_id: '3', name: 'brownies'}
      ])
    })
};
