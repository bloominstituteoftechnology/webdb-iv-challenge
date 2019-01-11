
exports.up = function(knex, Promise) {
    return knex.schema.createTable("recipies", table => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.integer("dish_id").references("dishes.id");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("recipies");
};
