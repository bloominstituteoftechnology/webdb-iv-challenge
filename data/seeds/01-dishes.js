
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {name: "Chocolate Cake"},
        {name: "Eggs Benedict"},
        {name: "Thumbprint Cookies"},
        {name: "Tacos"},
        {name: "Hamburger"},
      ]);
    });
};
