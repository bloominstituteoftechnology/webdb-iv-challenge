exports.up = function(knex, Promise) {
  return knex.schema.createTable("instructions", table => {
    table.increments("id");
    table
      .text("instruction_text")
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("instructions");
};
