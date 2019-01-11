exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredients", table => {
    table.increments("id");
    table
      .text("ingredient_name")
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ingredients");
};
