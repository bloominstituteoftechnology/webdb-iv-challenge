
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'InstaRibs', ingredient: 'Ribs', quantity: 1, unit: 'Rack', dish_id: 1},
        {name: 'InstaRibs', ingredient: 'BBQ Sauce', quantity: 2.5, unit: 'Cups', dish_id: 1},
        {name: 'InstaRibs', ingredient: 'Apple Juice', quantity: 0.5, unit: 'Cups', dish_id: 1},
        {name: 'InstaRibs', ingredient: 'Apple Cider Vinegar', quantity: 0.5, unit: 'Cups', dish_id: 1},
        {name: 'InstaRibs', ingredient: 'Water', quantity: 0.5, unit: 'Cups', dish_id: 1},
        {name: 'Pulled Chicken', ingredient: 'Chicken Thighs', quantity: 2.5, unit: 'Pounds', dish_id: 2},
        {name: 'Pulled Chicken', ingredient: 'BBQ Sauce', quantity: 2, unit: 'Cups', dish_id: 2},
        {name: 'Pulled Chicken', ingredient: 'Salt', quantity: 1, unit: 'Pinch', dish_id: 2},
        {name: 'Pulled Chicken', ingredient: 'Pepper', quantity: 1, unit: 'Pinch', dish_id: 2},
        {name: 'Sesame Chicken', ingredient: 'Chicken Breast', quantity: 3, unit: 'Pounds', dish_id: 3},
        {name: 'Sesame Chicken', ingredient: 'Sesame Sauce', quantity: 3, unit: 'Cups', dish_id: 3},
        {name: 'Sesame Chicken', ingredient: 'Rice', quantity: 2, unit: 'Cups', dish_id: 3}
      ]);
    });
};
