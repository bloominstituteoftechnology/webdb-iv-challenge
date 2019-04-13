exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: "flour" }, 
        { name: "eggs" }, 
        { name: "cheese" },
        { name: "pepporoni" }]);
    });
};
