
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(tbl) {
        tbl.increments();
        tbl
        .string('name', 128)
        .notNullable()
        .unique('recipe_name');
        
        tbl
        .integer('dish_id')
        .references('id')
        .inTable('dishes');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('dishes');
};
