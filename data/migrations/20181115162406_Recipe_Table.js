
exports.up = function (knex, Promise) {
    return knex.schema.createTable('Recipes', function (tbl) {
        tbl.increments();

        tbl
            .string('Name', 250)
            .integer('Dish_id')

    }
    )
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('Recipes');
};
