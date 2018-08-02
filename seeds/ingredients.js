
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Roasted Salted Seaweed', quantity: '12 sheets', recipe_id: 1},
        {name: 'Thinly-Sliced Beef Tenderloin', quantity: '2 lbs', recipe_id: 2},
        {name: 'Cuban Bread', quantity: '1 loaf', recipe_id: 3},
        {name: 'Chicken Breast', quantity: '1 lb', recipe_id: 4},
        {name: 'Shredded, Slow-Cooked Pork', quantity: '2 lbs', recipe_id: 5},
        {name: 'Udon Noodles', quantity: '1 lb', recipe_id: 6}
      ]);
    });
};
