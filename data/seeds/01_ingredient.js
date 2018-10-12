
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        {name:'corn flower', amount:3.5},
        {name:'butter', amount:2},
        {name:'sausage', amount:3}
      ]);
    });
};
