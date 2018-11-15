
exports.up = function (knex, Promise) {
    return knex.schema.createTable('ingredients', tbl => {
        tbl
            .increments();
        tbl
            .string('ingredient', 355)
            .notNullable();
        tbl
            .float('quanity')
        tbl
            .integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipes');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
};
