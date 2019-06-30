
exports.up = function(knex, Promise) {
    return knex.schema.table('dish', tbl => {
        tbl.renameColumn('name', 'dish')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.table('dish', tbl => {
        tbl.renameColumn('dish', 'name')
    })
  };
  