
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Eggs'},
        {name: 'Green peppers'},
        {name: 'Onions'},
        {name: 'Cheese'},
        {name: 'Ham'},
        {name: 'Bacon'},
        {name: 'Figs'},
        {name: 'Milk'},
        {name: 'Gelatin'},
        {name: 'Vanilla'},
        {name: 'Blood'},
        {name: 'Dough'},
        {name: 'Pepperoni'},
        {name: 'Tomato Sauce'},
        {name: 'Pineapple'},
        {name: 'Beef'},
        {name: 'Bun'},
        {name: 'Tuna'},
        {name: 'Pasta'},
        {name: 'Broccoli'},
        {name: 'Shrimp'},
        {name: 'Stir Fry Veggies'},
        {name: 'Stir Fry Sauce'},
        {name: 'Pork'},
      ]);
    });
};
