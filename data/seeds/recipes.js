exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: "pepporoni", dishes_id: 1 }, 
        { name: "jacks", dishes_id: 1 }, 
        { name: "tombstone", dishes_id: 1 },
      ]);
    });
};
