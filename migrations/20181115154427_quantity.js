
exports.up = function(knex, Promise) {
  return knex.schema.createTable('quantity', function(tbl) {
      tbl.increments();
      tbl
        .float('multiplier')
        .notNullable()
    tbl 
        .string('name', 200)
        .notNullable()
        .unique('measurement')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('quantity')
};
