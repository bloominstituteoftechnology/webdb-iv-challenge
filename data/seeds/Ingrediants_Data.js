
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('Ingrediants')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Ingrediants').insert([
        { Name: 'Dough' },
        { Name: 'Cheese' },
        { Name: 'Tomato' },
        { Name: 'Pepperoni' },
        { Name: 'Meat' },
        { Name: 'Chicken' },
        { Name: 'Broth' },
        { Name: 'Carrots' },
        { Name: 'Potatos' },
        { Name: 'Peas' },
        { Name: 'Spice' },
        { Name: 'Beans' },
        { Name: 'Buns' },
        { Name: 'Lettuce' }
      ]);
    });
};
