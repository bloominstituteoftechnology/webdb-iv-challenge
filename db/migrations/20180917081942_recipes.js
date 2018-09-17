
exports.up = function(knex, Promise) {
    return knex.schema.createTable('_recipes', function(tbl) {
        tbl.increments();
        tbl
        .string('name', 128)
        .notNullable()
        .unique('recipes_name');
        
        tbl
        .integer('dish_id')
        .references('id')
        .inTable('dishes');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('_recipes');
};
