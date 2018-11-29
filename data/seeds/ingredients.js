exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name')
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { name: "flour", ingredients_id:  }, 
        { name: "eggs", ingredients_id:  }, 
        { name: "noodles", ingredients_id:  },
        { name: "chocolate", ingredients_id:  }]);
    });
};
