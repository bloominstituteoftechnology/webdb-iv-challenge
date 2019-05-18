
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', function(table){
      table.increments()
      table.string('name', 250).notNullable()
      table.unique('name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients')
};
