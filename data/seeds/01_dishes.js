
exports.seed = function(knex, Promise) {

  return knex('dishes').truncate()
    .then(function () {
      
      return knex('dishes').insert([
          {dishName: "Chocolate Cake"},
          {dishName: "Eggs Benedict"},
          {dishName: "Thumbprint Cookies"},
          {dishName: "Tacos"},
          {dishName: "Hamburger"},
      ]);
    });
};
