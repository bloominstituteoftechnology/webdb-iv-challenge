
exports.up = function(knex, Promise) {
  return knex.schema.table(('ingredients'), function(tbl) {
      tbl.string('quantity');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table(('ingredients'), function(tbl) {
      tbl.dropColumn('quantity')
  })
};
