
exports.up = function(knex, Promise) {
    return knex.schema.createTable("Recipes", tbl => {

        tbl.increments();

        tbl.string('Recipe',128).notNullable();

        tbl
        .integer("dish_id")
        .references("id")
        .inTable("Dishes");

    })



};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("Recipes");
};
