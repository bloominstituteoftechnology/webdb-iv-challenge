
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(tbl) {
        tbl.increments();
        tbl.string('name', 128).notNullable();
        tbl.text('instructions');
        tbl.integer('dish_id').unsigned().references('id').inTable('dishes').notNullable();
        tbl.timestamps(true, true);
        tbl.unique('name', 'uq_recipe_name');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
};
