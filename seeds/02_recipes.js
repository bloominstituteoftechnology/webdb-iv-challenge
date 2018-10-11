
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Tasty Pizza Beans', dishes_id: 1},
        {name: 'Lentil Hamburgers', dishes_id:2},
        {name: 'Lentil Bacon', dishes_id:2}
      ]);
    });
};
