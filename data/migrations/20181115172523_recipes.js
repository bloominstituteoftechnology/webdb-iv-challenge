
exports.up = function (knex, Promise) {
    return knex.schema.createTable("recipes", (tbl) => {
      tbl.increments("id").primary();
      tbl.text("name").notNull();
      tbl.text("dish_id").references("dishes.id")
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists("recipes");
};
