
exports.up = function(knex, Promise) {
  
    return knex.schema.createTable("Ingrediants", tbl => {

        tbl.increments();

        tbl.string('Ingrediants',128).notNullable();

        tbl
        .integer("recipe_id")
        .references("id")
        .inTable("Recipes");

        tbl
        .integer("dish_id")
        .references("id")
        .inTable("Dishes");

    })

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("Ingrediants");
};
