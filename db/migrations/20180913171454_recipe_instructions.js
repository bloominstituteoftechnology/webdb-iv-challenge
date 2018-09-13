exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipe_instructions", tbl => {
    tbl.increments();

    tbl
      .integer("step")
      .unsigned()
      .notNullable();

    tbl
      .string("discription", 2000)
      .notNullable();
     
    tbl
      .integer("recipe_id")
      .unsigned()
      .references("recipes.id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipe_instructions");
};
