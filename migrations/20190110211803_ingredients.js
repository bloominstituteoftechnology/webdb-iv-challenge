
exports.up = function(knex, Promise) {
    // Build ingredients manager
    return knex.schema.createTable('ingredients', table => {
        table.increments();
        table.string('ingredient_name');
        table.integer('ingredient_stock');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
};
