exports.up = function(knex, Promise) {
  return knex.schema.table('ingredients', tbl => {
    tbl.dropColumn('quantity');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('ingredients', tbl => {
    tbl.float('quantity');
  });
};
