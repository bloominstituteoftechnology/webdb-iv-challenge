
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', tbl => {
        tbl.increments();

        tbl
        .string('ingredients', 5000)
        .notNullable()

        tbl
        .float('quantity')

        tbl
        .integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipe')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients')
};
