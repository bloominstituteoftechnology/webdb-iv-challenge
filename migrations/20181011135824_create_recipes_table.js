
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', table => {
    table.increments()
    table.string('name')    
    table.unique('name')

    table.integer('dishes_id')
    .unsigned()
    .references('dishes.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes')
};
