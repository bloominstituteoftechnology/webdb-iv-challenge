
exports.up = function(knex, Promise) {

 return knex.schema.createTable('dish', function(t) {
        t.increments('id').primary();  

      t
      .string('name')
      .notNullable()
      .unique()
      .defaultTo('Not Provided');
  }); 
};


exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dish');
};
