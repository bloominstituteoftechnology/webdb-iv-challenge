
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recepies').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recepies').insert([
        {name: 'Pan pizza', description: "A pan pizza", dishId: '1'},
        {name: 'Fresh taco', description: "The Freshest taco", dishId: '2'},
        {name: 'Spicy beans', description: "The most spicy beans", dishId: '3'}
      ]);
    });
};
