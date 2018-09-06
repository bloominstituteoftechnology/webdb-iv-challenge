
exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", function(tbl){
    tbl.increments()
    tbl
      .string("name")
      .notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("recipes")
};
