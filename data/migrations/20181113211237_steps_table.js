
exports.up = function(knex, Promise) {
    return knex.schema.createTable('steps', function(tbl) {
        tbl.increments('id')

        tbl.string('name', 250)

        tbl
        .integer('recipes_id')
        .notNullable()
        .references('id')
        .inTable('recipes')

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('steps');
};
