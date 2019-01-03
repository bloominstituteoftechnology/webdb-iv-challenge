
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {title: 'Chicken Tacos'},
        {title: 'Cheese Burgers'},
        {title: 'Pasta Primavera'},
        {title: 'Eggplant Parmasan'},
      ]);
    });
};
