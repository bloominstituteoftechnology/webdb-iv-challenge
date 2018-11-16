
exports.up = function (knex, Promise) {
    return knex.schema.crateTable("ingredients", function (tbl) {
        tbl.increments("id").primary();
        tbl.text("name").notNull();
        tbl.integer("quantity").notNull();
        tbl.integer("recipe_id").references("recipes.id");
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists("ingredients")
};
