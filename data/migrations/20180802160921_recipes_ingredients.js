exports.up = function (knex, Promise) {
  return knex.schema.createTable("recipes_ingredients", tbl => {
    tbl.increments();
    tbl
      .integer("recipes_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes");
    tbl
      .integer("ingredients_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("ingredients");
    tbl
      .integer("quantity")
      .unsigned()
      .notNullable();
    tbl.string("measurements", 128);
    tbl.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("recipes_ingredients");
};
