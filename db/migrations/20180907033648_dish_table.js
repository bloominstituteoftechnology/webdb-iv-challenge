
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dish', function (table) {
    // dish id
    table.increments()
    // dish name
    table.string('name', 255)
         .notNullable()
         .unique('dish_name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dish')
};
