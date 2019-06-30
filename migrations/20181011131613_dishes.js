
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', function(t) {
        t.increments();
        t.string('name', 128)
        .notNullable()
        .unique('dish_name')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes');
};
