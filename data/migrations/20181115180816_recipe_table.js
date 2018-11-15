
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(tbl) {
    tbl.increments();

    tbl.string('recipe_name');
    tbl.string('recipe_instruction');

    tbl.integer('dish_id')
    .unsigned()
    .references('id')
    .inTable('dish');
    }
    )
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
};
