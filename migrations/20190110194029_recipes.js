
exports.up = function(knex, Promise) {
    knex.schema.createTable('recipes', function (table) {
        table.increments('id');
        table.string('name').notNullable();
        table.foreign('dish_id').notNullable().references('id').on('dishes');
    });
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable('recipes');
};