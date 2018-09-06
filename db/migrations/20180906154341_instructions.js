
exports.up = function(knex, Promise) {
  return knex.schema.createTable("instructions", function(tbl){
    tbl.increments()
    tbl
      .string("name")
      .notNullable()
    tbl
      .integer("receipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("cohorts")
    tbl
      .enu("steps")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("instructions")
};
