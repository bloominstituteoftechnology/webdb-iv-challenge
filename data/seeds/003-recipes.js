
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {name: 'Pepperoni Pizza', steps: 'rowValue1', dish_id: 3, ingredients: [2,4,5,6,7], quantity: ''},
        {name: 'Margherita Pizza', steps: 'rowValue1', dish_id: 3, ingredients: [2,4,5,6,7], quantity: ''},
        {name: 'Chef Salad', steps: 'rowValue1', dish_id: 2, ingredients: [3,4,6,8], quantity: ''},
        {name: 'Caeser Salad', steps: 'rowValue1', dish_id: 2, ingredients: [3,4,6], quantity: ''},
        {name: 'Mashed Potatoes', steps: 'rowValue1', dish_id: 1, ingredients: [1,2,4,7], quantity: ''},
        {name: 'Roasted Potatoes', steps: 'rowValue1', dish_id: 1, ingredients: [1,2,7], quantity: ''}
      ]);
    });
};
