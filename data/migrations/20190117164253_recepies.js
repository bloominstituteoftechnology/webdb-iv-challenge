
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recepies', function(tbl){
        tbl.increments();
 
        tbl
        .string('name', 255)
        .notNullable()
        .unique('uq_recepies_name');

        tbl.string('description', 255);
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recepies');
  };