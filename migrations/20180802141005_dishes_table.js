
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', function(tbl){
      //pk
      tbl.increments();
      //other tables
      tbl.string('name', 120)
        .notNullable()
        .unique()
        
  })
};

exports.down = function(knex, Promise) {
        //drop this table
    return knex.schema.dropTableIfExists('dishes')
};
