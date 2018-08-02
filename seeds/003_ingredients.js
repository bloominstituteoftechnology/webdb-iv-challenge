
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Pizza Dough'},
        {name: 'Cheese'},
        {name: 'Pizza Sauce'},
        {name: 'Pepperoni'},
        {name: 'Rice'},
        {name: 'Seaweed'},
        {name: 'Cream Cheese'},
        {name: 'Salmon'},
        {name: 'Macaroni'},
      ]);
    });
};
