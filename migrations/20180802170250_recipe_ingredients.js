
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe_ingredients', tbl => {
        tbl.increments();

        tbl
        .integer("recipe_id")
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

        tbl
        .integer("ingredients_id")
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe_ingredients');
};
