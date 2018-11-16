
exports.up = function (knex, Promise) {
    return knex.schema.createTable('Dish', function (tbl) {

        tbl.increments()

        tbl
            .string('Name', 200)
            .notNullable()
            .unique();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('Dish');
};
