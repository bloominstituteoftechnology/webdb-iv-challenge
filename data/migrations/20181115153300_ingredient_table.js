
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredient', tbl => {
        tbl.increments();
        tbl.string('ingredient', 128);
        tbl.float('quantity');
        tbl.integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipe');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredient');
};
