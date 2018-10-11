exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', function(tbl) {
        tbl.increments();
        tbl.string('ingredient', 64).notNullable();
        tbl.integer('recipe_id').unsigned().references('id').inTable('recipes')
        tbl.integer('quantity_id').unsigned().references('id').inTable('quantity')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients')
};
