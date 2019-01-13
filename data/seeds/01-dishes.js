
exports.seed = function(knex, Promise) {
    return knex('dishes').truncate()
      .then(function () {
        return knex('dishes').insert([
          {dish_name: "Chocolate Cake"},
          {dish_name: "Eggs Benedict"},
          {dish_name: "Thumbprint Cookies"},
          {dish_name: "Tacos"},
          {dish_name: "Hamburger"},
      ]);
      });
  };