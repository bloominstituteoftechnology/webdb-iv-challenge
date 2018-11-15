
exports.up = function(knex, Promise) {
  return knex.schema.table('recipes', tbl => {
      tbl.integer('dishId').references('id').inTable('dishes')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('students' , function(tbl){
        tbl.dropColumn('dishId');
    });
};
