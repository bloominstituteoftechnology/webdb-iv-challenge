
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredient', tbl => {
        tbl.increments();
        tbl.string('name', 128);
        tbl.integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipe');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredient');
};
