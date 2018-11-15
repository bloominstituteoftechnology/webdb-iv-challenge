exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', tbl => {
        tbl.increments();
        tbl.string('dish_name', 64).notNullable();
        tbl.unique('dish_name');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dishes');
};