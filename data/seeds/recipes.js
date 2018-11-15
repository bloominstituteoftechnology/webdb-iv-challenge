exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        { dishes_id: 1, name: 'Bacon Cheeseburger' },
        { dishes_id: 1, name: 'Whiskey River BBQ Burger' },
        { dishes_id: 1, name: 'Veggie Burger' },
        { dishes_id: 2, name: 'Cheese Ravioli' },
        { dishes_id: 2, name: 'Fettucine Alfredo' },
        { dishes_id: 2, name: 'Five Cheese Ziti al Forno' },
        { dishes_id: 3, name: 'Fried Chicken' },
        { dishes_id: 3, name: 'Chicken Pot Pie' },
        { dishes_id: 3, name: 'Chopped Chicken Salad' }
      ]);
    });
};
