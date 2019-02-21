
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', function(tbl){
      tbl.increments();
      tbl.string('ingredient_name').notNullable().unique();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients')
};
