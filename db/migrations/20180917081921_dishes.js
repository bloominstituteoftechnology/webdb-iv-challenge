
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', function(tbl) {
        tbl.increments();
  
        tbl
        .string('name', 128)
        .notNullable()
        .unique('dish_name')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('dishes');
};
