
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(tbl) {
        tbl.increments();
        tbl.string('name', 128);
        tbl.integer('dish_id').unsigned().references('id').inTable('dishes');
        tbl.unique('name', 'uq_recipes_name');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
};
