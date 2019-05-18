
exports.up = function (knex, Promise) {
    return knex.schema.createTable('Recipes_Ingrediants', function (tbl) {

        tbl.increments();

        tbl
            .integer('Recipes_id')
            .notNullable()
            .unsigned()
            .references('id').inTable('Recipes')

        tbl.integer('Ingrediants_id')
            .notNullable()
            .unsigned()
            .references('id').inTable('Ingrediants')

        tbl
            .float('quantity')
            .notNullable()
            .unsigned()
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('Recipes_Ingrediants')
};
