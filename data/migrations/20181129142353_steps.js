
exports.up = function(knex, Promise) {
    return knex.schema.createTable('steps', tbl => {
        tbl.increments();
        tbl.string('step', 2000);
        tbl.integer('ingredients_id')
        .unsigned()
        .references('id')
        .inTable('ingredients');
        tbl.integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipe');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('steps');
};
