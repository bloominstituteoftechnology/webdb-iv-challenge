exports.up = function (knex, Promise) {
    return knex.schema.createTable('recipeIngredients', tbl => {
        tbl.increments();
        tbl
            .integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('dishes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        tbl
            .integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        tbl
            .float('quantity')
            .notNullable()
    })
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('recipeIngredients')
};