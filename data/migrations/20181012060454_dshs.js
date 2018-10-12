
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dshs', function(tbl) {
      tbl.increments().primary();
      
      tbl.string('dshs_nme').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dshs');
};
