
exports.up = function(knex, Promise) {
    return knex.schema.table(('ingredients'), function(tbl) {
        tbl.dropColumn('quantity')
        tbl.real('quantity#');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.table(('ingredients'), function(tbl) {
        tbl.dropColumn('quantity#')
        tbl.string('quantity')
    })
  };
  