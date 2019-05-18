
exports.up = function (knex, Promise) {
    return knex.schema.createTable('Ingrediants', function (tbl) {

        tbl.increments();

        tbl
            .string('Name', 250)
            .notNullable()
            .unique();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('Ingrediants');
};
