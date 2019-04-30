exports.up = function (knex, Promise) {
    return knex.schema.createTable('recipe-ingredients', tbl => {
        tbl.increments();
        tbl
            .integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipe')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl
            .integer('ingredient_id')
            .unsigned()
            .references('id')
            .inTable('ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.float('quantity').notNullable();

    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('recipe-ingredients');
};