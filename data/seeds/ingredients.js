exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name')
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { name: "flour" }, 
        { name: "eggs" }, 
        { name: "cheese" },
        { name: "pepporoni" }]);
    });
};
