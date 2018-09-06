
exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredients", function(tbl){
    tbl.increments()
    tbl
      .string('name')
      .notNullable()
    tbl
      .float("quantity")
    tbl
      .string("unit_of_measure")
      .notNullable()
      
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("ingredients")
};
