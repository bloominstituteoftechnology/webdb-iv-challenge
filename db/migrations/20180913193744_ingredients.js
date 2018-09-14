
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', function(t){
    t.increments();
    t
    .string('name')
    .notNullable()
    .unique('ingredient');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ingredients')
};
