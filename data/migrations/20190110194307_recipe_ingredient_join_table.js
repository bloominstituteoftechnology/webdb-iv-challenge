
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe_ingredient_join', table => {
        table.increments();
        table.integer('recipe_id').unsinged();
        table.integer('ingredient_id').unsinged();
        table.foreign('recipe_id').references('id').on('recipes');
        table.foreign('ingredient_id').references('id').on('ingredient');
        


    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe_ingredient_join');
};
