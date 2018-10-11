
exports.up = function(knex, Promise) {
  return knex.schema.createTable('units', function(tb) {
    tb.increments();
    tb.string('unit').notNullable().unique('unit_name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('units');
};
