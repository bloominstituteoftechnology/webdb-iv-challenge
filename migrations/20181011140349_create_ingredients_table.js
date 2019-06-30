
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', table => {
    table.increments()
    table.string('name')
    table.float('quantity')
  })
};

exports.down = function(knex, Promise) {
  
};
