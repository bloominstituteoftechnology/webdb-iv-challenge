exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredients", table => {
    table.increments();

    table.string("name", 256).notNullable();

    table
      .integer("dish_id")
      .unsigned()
      .notNullable()
      .refrences("id")
      .inTable("recipes")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ingredients");
};
