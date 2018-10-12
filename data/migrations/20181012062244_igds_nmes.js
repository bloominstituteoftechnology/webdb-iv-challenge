
exports.up = function(knex, Promise) {
  return knex.schema.createTable('igds_nmes', function(tbl) {
      tbl.increments().primary();

      tbl.string('igds_nme').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('igds_nmes');
};
