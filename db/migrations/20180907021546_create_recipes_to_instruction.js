exports.up = function(knex, Promise) {
  return knex.schema.createTable(`RecipeToInstruction`, table => {
    table
      .integer(`recpie_id`)
      .unsigned()
      .notNullable()
      .references(`id`)
      .inTable(`recpie`);

    table
      .integer(`instruction_id`)
      .unsigned()
      .notNullable()
      .references(`id`)
      .inTable(`ingredient`);

    table
        .integer(`step`)
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(`RecipeToInstruction`);
};
