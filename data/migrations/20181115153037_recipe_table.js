
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe', tbl => {
        tbl.increments();
        tbl.string('name', 128);
        tbl.integer('dish_id')
            .unsigned()
            .references('id')
            .inTable('dish');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe');
};
