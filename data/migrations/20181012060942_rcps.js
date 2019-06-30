
exports.up = function(knex, Promise) {
  return knex.schema.createTable('rcps', function(tbl) {
      tbl.increments().primary();

      tbl.string('rcps_nme').notNullable();
      tbl
        .integer('dshs_id')
        .references('id')
        .inTable('dshs')
        .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('rcps');
};
