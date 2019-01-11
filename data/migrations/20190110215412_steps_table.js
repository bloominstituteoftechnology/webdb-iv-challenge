
exports.up = function(knex, Promise) {
    return knex.schema.createTable("steps", table => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.integer("ingredient_id").references("ingredients.id") 
        table.float("amount");
        table.integer("recipie_id").references("recipies.id");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("steps");
};
