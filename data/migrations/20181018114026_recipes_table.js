
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(tbl) {
        tbl.increments().primary();
        tbl.integer('dish_id').references('id').inTable('dishes');
        tbl.float('quantity').notNullable();
        tbl.string('instructions', 255).notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
};
