
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', function(tbl) {
      tbl.increments();
      tbl
        .string('name')
        .notnullable()
        .unique('ingredient_name')
  })
};

exports.down = function(knex, Promise) {
  
};
