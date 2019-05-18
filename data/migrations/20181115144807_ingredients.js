
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('ingredient_name', 100).notNullable();
        tbl.integer('recipe_id').unsigned().references('id').inTable('recipes');
        tbl.integer('quantity_id').unsigned().references('id').inTable('quantity');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
};
