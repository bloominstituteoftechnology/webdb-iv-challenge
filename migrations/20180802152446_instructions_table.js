
exports.up = function(knex, Promise) {
    return knex.schema.createTable('instructions', tbl => {
        tbl.increments()
    
        tbl
            .string('name', 256)
            .notNullable();
        
        tbl
            .string('description')
      })
    };


exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('instructions')
};
