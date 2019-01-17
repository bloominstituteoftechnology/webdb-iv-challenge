
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', function (tbl) {
        tbl.increments();
        tbl.string('name').notNullable();
        tbl.string('instructions')
        tbl.integer('recipe_id').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients')
};
