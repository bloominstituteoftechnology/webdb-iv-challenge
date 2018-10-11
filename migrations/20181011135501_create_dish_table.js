
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', table => {
      table.increments()
      table.string('name')
      table.unique('name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dishes')
};
