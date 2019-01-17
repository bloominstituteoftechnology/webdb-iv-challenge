
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recepies').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recepies').insert([
        {name: 'Pan pizza', description: "A pan pizza"},
        {name: 'Fresh taco', description: "The Freshest taco"},
        {name: 'Spicy beans', description: "The most spicy beans"}
      ]);
    });
};
