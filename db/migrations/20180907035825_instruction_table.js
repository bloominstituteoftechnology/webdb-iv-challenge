
exports.up = function(knex, Promise) {
  return knex.schema.createTable('instruction', function (table) {
    // instruction id
    table.increments()
    // instruction name
    table.string('steps', 255)
         .notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('instruction')
};
