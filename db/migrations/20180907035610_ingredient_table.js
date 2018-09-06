
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredient', function (table) {
    // ingredient id
    table.increments()
    // ingredient name
    table.string('name', 255)
         .defaultTo('ingredient')
    // ingredient quantity
    table.float('quantity')
    // measurement unit
    table.string('unit', 255)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredient')
};
