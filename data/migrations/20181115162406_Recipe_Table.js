
exports.up = function (knex, Promise) {
    return knex.schema.createTable('Recipes', function (tbl) {
        tbl.increments();

        tbl
            .string('Name', 250)
            .notNullable()
            .unique('Name');
    }
    )
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('Recipes');
};
