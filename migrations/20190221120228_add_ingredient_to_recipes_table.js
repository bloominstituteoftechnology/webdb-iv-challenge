
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredient_to_recipes', function(tbl){
        tbl.increments();
        tbl.float('quantity').notNullable();
        tbl.string('units').notNullable();
        tbl.integer('ingredient_id').unsigned();
        tbl.foreign('ingredient_id').references('ingredients.id');
        tbl.integer('recipe_id').unsigned();
        tbl.foreign('recipe_id').references('recipes.id');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredient_to_recipes')
};
