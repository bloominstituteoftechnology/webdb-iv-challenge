
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes')
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        { name: "pizza" }, 
        { name: "tacos" }, 
        { name: "brownies" }]);
    });
};
