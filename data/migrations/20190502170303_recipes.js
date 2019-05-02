exports.up = function (knex, Promise) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        tbl
            .string('recipe_name', 128)
            .notNullable()
            .unique();
        tbl
            .integer('dish_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('dishes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        tbl
            .string('instructions', 255)
            .notNullable()
            .unique();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('recipes')
};