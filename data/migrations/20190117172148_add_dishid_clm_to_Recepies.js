

exports.up = function(knex, Promise) {
    return knex.schema.table('recepies', function(tbl){

        tbl.integer('dishId');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropColumn('dishId');
  };