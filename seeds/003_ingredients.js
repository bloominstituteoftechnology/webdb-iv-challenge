
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {colName: 'Pizza Dough'},
        {colName: 'Cheese'},
        {colName: 'Pizza Sauce'},
        {colName: 'Pepperoni'},
        {colName: 'Rice'},
        {colName: 'Seaweed'},
        {colName: 'Cream Cheese'},
        {colName: 'Salmon'},
        {colName: 'Macaroni'},
        {colName: 'Cheese'},
      ]);
    });
};
