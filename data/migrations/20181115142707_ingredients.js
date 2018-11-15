
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', table => {
    table.increments()
    table.string('ingredient')
    table.float('amount', 2, 2)
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients');
  
};


// table.float(column, [precision], [scale])
