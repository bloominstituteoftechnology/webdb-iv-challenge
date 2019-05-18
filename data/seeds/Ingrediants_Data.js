
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('Ingrediants')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Ingrediants').insert([
        { Name: 'Dough' },   //1
        { Name: 'Cheese' }, //2
        { Name: 'Tomato' }, //3
        { Name: 'Pepperoni' }, //4
        { Name: 'Meat' }, //5
        { Name: 'Chicken' }, //6
        { Name: 'Broth' }, //7
        { Name: 'Carrots' }, //8
        { Name: 'Potatos' }, //9
        { Name: 'Peas' }, //10
        { Name: 'Spice' }, //11
        { Name: 'Beans' }, //12
        { Name: 'Buns' }, //13
        { Name: 'Lettuce' } //14
      ]);
    });
};
