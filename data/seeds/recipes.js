exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name')
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { name: "pepporoni", dishes_id: 1 }, 
        { name: "jacks", dishes_id: 1 }, 
        { name: "tombstone", dishes_id: 1 },
      ]);
    });
};
