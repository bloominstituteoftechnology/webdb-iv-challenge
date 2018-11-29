exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name')
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { name: "pepporoni pizza", dishes_id:  }, 
        { name: "fish taco", dishes_id:  }, 
        { name: "chocolate brownies", dishes_id:  },
      ]);
    });
};
