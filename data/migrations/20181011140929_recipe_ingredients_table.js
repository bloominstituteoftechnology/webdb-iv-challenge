exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe_ingredients', (tbl) => {
        tbl.increments();
        tbl.integer('recipe').unsigned().references('id').inTable('recipes');
        tbl.integer('ingredient').unsigned().references('id').inTable('ingredients');
        tbl.decimal('amount').unsigned().notNullable();
        tbl.string('unit').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe_ingredients');
};
