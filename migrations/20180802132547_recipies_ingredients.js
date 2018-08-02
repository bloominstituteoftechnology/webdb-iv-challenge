exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipies_ingredients", tbl => {
    tbl.increments();

    tbl
      .integer("recipie_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipies")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    tbl
      .integer("ingredients_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("zoos")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipies_ingredients");
};
