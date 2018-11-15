
exports.up = function (knex, Promise) {
    return knex.schema.createTable('Dish', function (tbl) {

        tbl.increments()

        tbl
            .string('name', 200)
            .notNullable()
            .unique();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('Dish');
};
