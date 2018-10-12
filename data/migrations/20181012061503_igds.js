
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ists', function(tbl) {
      tbl.increments().primary();

      tbl.string('desc').notNullable();
      tbl.integer('qnty').notNullable();
      tbl
        .integer('igds_id')
        .references('id')
        .inTable('igds_nmes')
        .onDelete('CASCADE');
    tbl.integer('stps');
    tbl
        .integer('rcps_id')
        .references('id')
        .inTable('rcps')
        .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ists');
};
