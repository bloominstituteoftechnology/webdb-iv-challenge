
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function (tbl) {
        tbl.increments();
        tbl.timestamp('created_at').defaultTo(knex.fn.now());
        tbl
            .string('name', 128)
            .notNullable()
            .unique('recipe_name');
        tbl
            .integer('dish_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('dishes');
        tbl
            .integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('recipes');
};
