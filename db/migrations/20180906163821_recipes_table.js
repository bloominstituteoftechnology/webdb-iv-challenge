
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(tbl) {
        tbl.increments();

        tbl.string('name', 128)
        .notNullable();

        // foreign key
        tbl.integer('dish_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('dishes');

        tbl.string('ingredients', 128)
        .notNullable();

        tbl.string('instructions', 2048)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
};
