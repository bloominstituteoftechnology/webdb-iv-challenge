exports.up = function (knex, Promise) {
    return knex.schema.createTable('shopping_list', (tbl) => {
        tbl.increments();

        tbl
            .integer('recipe_id')
            .unsigned()
            .references(recipes.id);

        tbl
            .integer('ingredient_id')
            .unsigned()
            .references('ingredients.id');

        tbl
            .float('quantity')
            .unsigned()
            .notNullable()

        tbl
            .string('units', 20)
            .notNullable();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('shopping_list')
};
