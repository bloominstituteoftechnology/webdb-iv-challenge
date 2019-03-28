exports.up = function(knex, Promise) {
  return knex.schema.table('recipe-ingredients', tbl => {
    tbl.float('quantity');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('recipe-ingredients', tbl => {
    tbl.dropColumn('quantity');
  });
};
